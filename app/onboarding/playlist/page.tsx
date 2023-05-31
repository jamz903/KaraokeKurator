"use client";
import { useAppContext } from "app/AppContext";
import { Container } from "app/components/common/boxes/container";
import ButtonPrimary from "app/components/common/buttons/button-primary";
import Link from "next/link";
import { useEffect, useState } from "react";

// Keep track of which item is selected somehow using form

const Output = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [playlists, setPlaylists] = useState([]);
  const { authToken, changeAuthToken } = useAppContext();

  useEffect(() => {
    const token = authToken;
    console.log(token);

    fetch(`https://api.spotify.com/v1/me/playlists`, {
      headers: {
        Authorization: "Bearer " + token
      }
    })
      .then((response) => {
        const res = response.json();
        console.log(res);
        return res;
      })
      .then((data) => setPlaylists(data.items));
  }, []);

  return (
    <Container className="flex flex-col align-center h-screen justify-between pb-[15vh]">
      <div className="flex flex-col self-start h-full pt-[5vh]">
        <div className="flex flex-col gap-2 pb-8">
          <p className="text-5xl font-medium">
            Check <br /> these out!
          </p>
          <p className="text-xl">
            Save this to a new Spotify playlist, let us know if you love these choices!
          </p>
          <p className="text-md">
            ...or{" "}
            <Link href="/onboarding/spotify">
              <span className="text-primary-600 underline">add another playlist!</span>
            </Link>
          </p>
        </div>
        <div>
          {playlists.length !== 0 &&
            playlists.map((item, index) => (
              <div
                key={index}
                onClick={() => setSelectedItem(item)}
                style={{ backgroundColor: item === selectedItem ? "lightblue" : "" }}
              >
                {item.name}
              </div>
            ))}
        </div>
      </div>

      <ButtonPrimary
        className="w-full mt-8"
        disabled={selectedItem === null}
        onClick={() => console.log(authToken)}
      >
        <Link
          className={`${selectedItem === null ? "pointer-events-none" : ""}`}
          href={`/onboarding/loading?playlistId=${selectedItem === null ? "" : selectedItem.id}`}
        >
          <p>Analyze this playlist!</p>
        </Link>
      </ButtonPrimary>
    </Container>
  );
};

export default Output;
