"use client";
import { Container } from "app/components/common/boxes/container";
import ButtonPrimary from "app/components/common/buttons/button-primary";
import TextInputField from "app/components/common/inputs/TextInputField";
import PlaylistCarousel from "app/components/pages/playlists/PlaylistCarousel";
import { Song } from "app/components/pages/playlists/PlaylistRow";
import Link from "next/link";
import { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { useEffect } from "react";
import { useAppContext } from "app/AppContext";
import { useSearchParams } from "next/navigation";
import { ScaleLoader } from "react-spinners";

// Keep track of which item is selected somehow using form

const songs = [
  ["Eu Tá Vendo no Copo", "['Noriel Vilela']"],
  ["Nuestro Matrimonio", "['Nati Y Su Orquesta']"],
  ["Metaxota Sou Heria Ta", "['Antonis Remos']"],
  ["Indianer", "['Sven-Ingvars']"],
  ["Liljankukka", "['Päivi']"],
  ["Epilog", "['Jack DeJohnette']"],
  ["A New Way of Driving", "['B.B. King']"],
  ["Everything", "['Faye Wong']"],
  ["Aavani Poovin", "['P. Jayachandran']"],
  ["Nigdy więcej nie spotkamy się", "['Trubadurzy']"]
];

const Output = () => {
  const searchParams = useSearchParams();
  const playlistId = searchParams.get("playlistId");
  const [songData, setSongData] = useState([]);
  const { authToken, changeAuthToken } = useAppContext();

  useEffect(() => {
    const token = authToken;
    console.log(token);

    fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
      headers: {
        Authorization: "Bearer " + token
      }
    })
      .then((response) => {
        const res = response.json();
        console.log(res);
        return res;
      })
      .then((data) => {
        const ids = data.items.map((song) => song.track.id);
        const headers = {
          "Content-Type": "application/json"
        };
        const body = JSON.stringify({ ids: ids });
        console.log(body);
        fetch(`http://127.0.0.1:8000/users/songs/suggested`, {
          method: "POST",
          headers: headers,
          body: body
        }).then(async (r) => {
          const res = await r.json();
          console.log(res);
          setSongData(res);
        });
      });
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

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
        {songData.length === 0 && (
          <ScaleLoader color="white" width="8vw" height="17vh" className="pt-[7vh]" />
        )}
        {songData.length !== 0 && <PlaylistCarousel songs={songData} />}
      </div>

      <ButtonPrimary className="w-full mt-8" onClick={toggleDrawer}>
        <p>Add to New Spotify Playlist</p>
      </ButtonPrimary>

      <Drawer open={isOpen} onClose={toggleDrawer} direction="bottom" className="bg-black-600">
        <div className="bg-black-600 h-full p-5">
          <p className="text-lg font-medium mb-2">Save Songs to Spotify Playlist</p>
          <TextInputField className="text-md" header="New Playlist Name" />
          <ButtonPrimary className="w-full mt-10">Save</ButtonPrimary>
        </div>
      </Drawer>
    </Container>
  );
};

export default Output;
