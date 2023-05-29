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

// Keep track of which item is selected somehow using form

const songs: Song[] = [
  { name: "Moves like Jagger", band: "Maroon 5", yearReleased: "2013", albumCover: "" },
  { name: "Moves like Jagger", band: "Maroon 5", yearReleased: "2013", albumCover: "" },
  { name: "Moves like Jagger", band: "Maroon 5", yearReleased: "2013", albumCover: "" },
  { name: "Moves like Jagger", band: "Maroon 5", yearReleased: "2013", albumCover: "" },
  { name: "Moves like Jagger", band: "Maroon 5", yearReleased: "2013", albumCover: "" },
  { name: "Moves like Jagger", band: "Maroon 5", yearReleased: "2013", albumCover: "" },
  { name: "Moves like Jagger", band: "Maroon 5", yearReleased: "2013", albumCover: "" },
  { name: "Moves like Jagger", band: "Maroon 5", yearReleased: "2013", albumCover: "" },
  { name: "Moves like Jagger", band: "Maroon 5", yearReleased: "2013", albumCover: "" },
  { name: "Moves like Jagger", band: "Maroon 5", yearReleased: "2013", albumCover: "" },
  { name: "Moves like Jagger", band: "Maroon 5", yearReleased: "2013", albumCover: "" },
  { name: "Moves like Jagger", band: "Maroon 5", yearReleased: "2013", albumCover: "" }
];

const Output = () => {
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
            <Link href="/onboarding/playlist">
              <span className="text-primary-600 underline">add another playlist!</span>
            </Link>
          </p>
        </div>
        <PlaylistCarousel songs={songs} />
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
