"use client";
import { Container } from "app/components/common/boxes/container";
import ButtonPrimary from "app/components/common/buttons/button-primary";
import Link from "next/link";
import { IoMdArrowBack } from "react-icons/io";
import { useAppContext } from "app/AppContext";

const clientId = "30e0e3ed7eff42629489051b13a9882f";
const redirectUri = "http://localhost:3000/onboarding/spotify";

function generateRandomString(length) {
  let text = "";
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

async function generateCodeChallenge(codeVerifier) {
  function base64encode(string) {
    return btoa(String.fromCharCode.apply(null, new Uint8Array(string)))
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");
  }

  const encoder = new TextEncoder();
  const data = encoder.encode(codeVerifier);
  const digest = await window.crypto.subtle.digest("SHA-256", data);

  return base64encode(digest);
}

const getProfile = async () => {
  async function getProfile() {
    const token = localStorage.getItem("access_token");
    console.log(token);

    const response = await fetch("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: "Bearer " + token
      }
    });

    const data = await response.json();
  }

  console.log(await getProfile());
};

const Playlist = () => {
  const { authToken, changeAuthToken } = useAppContext();
  const handleSpotifyLogin = async () => {
    const codeVerifier = generateRandomString(128);
    localStorage.setItem("code_verifier", codeVerifier);
    generateCodeChallenge(codeVerifier).then((codeChallenge) => {
      const state = generateRandomString(16);
      const scope = "user-read-private user-read-email";

      const args = new URLSearchParams({
        response_type: "code",
        client_id: clientId,
        scope: scope,
        redirect_uri: redirectUri,
        state: state,
        code_challenge_method: "S256",
        code_challenge: codeChallenge
      });

      window.location = "https://accounts.spotify.com/authorize?" + args;
    });
  };

  const getAuthToken = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    const codeVerifier = localStorage.getItem("code_verifier");

    const body = new URLSearchParams({
      grant_type: "authorization_code",
      code: code,
      redirect_uri: redirectUri,
      client_id: clientId,
      code_verifier: codeVerifier
    });

    fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: body
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP status " + response.status);
        }
        return response.json();
      })
      .then((data) => {
        localStorage.setItem("access_token", data.access_token);
        changeAuthToken(data.access_token);
        console.log(data.access_token);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <Container className="flex flex-col align-center h-screen justify-between pb-[15vh]">
      <Link href="/" className="pt-[7vh]">
        <IoMdArrowBack className="h-8 w-8" />
      </Link>
      <div className="flex flex-col self-start h-full pt-[5vh]">
        <div className="flex flex-col gap-5 text-center">
          <p className="text-4xl font-medium">Enter a Spotify playlist</p>
          <p className="text-xl">
            We'll analyze your preferences according to your songs in the playlist!
          </p>
        </div>

        <ButtonPrimary className="w-full mt-10" onClick={handleSpotifyLogin}>
          <p>First, login to Spotify here</p>
        </ButtonPrimary>
        <ButtonPrimary className="w-full mt-10" onClick={getAuthToken}>
          <p>Next, get you auth token</p>
        </ButtonPrimary>
      </div>
      <ButtonPrimary className="w-full">
        <Link href="/onboarding/playlist">
          <p>Next</p>
        </Link>
      </ButtonPrimary>
    </Container>
  );
};

export default Playlist;
