"use client";
import { Container } from "app/components/common/boxes/container";
import ButtonPrimary from "app/components/common/buttons/button-primary";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ScaleLoader } from "react-spinners";
import { useEffect } from "react";
import { useAppContext } from "app/AppContext";

// REMOVE NEXT BUTTON
// NAVIGATE TO `/playlists/output` AFTER RECOMMENDED SONGS LOAD FINISH

const Playlist = () => {
  const searchParams = useSearchParams();
  const playlistId = searchParams.get("playlistId");
  const { authToken, changeAuthToken } = useAppContext();

  useEffect(() => {
    // const token = authToken;
    // console.log(token);

    // fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
    //   headers: {
    //     Authorization: "Bearer " + token
    //   }
    // })
    //   .then((response) => {
    //     const res = response.json();
    //     console.log(res);
    //     return res;
    //   })
    //   .then((data) => console.log(data.items));

    fetch(`../api/users/songs/suggested`).then((r) => console.log(r.json()));
  }, []);

  return (
    <Container className="flex flex-col align-center h-screen justify-between pb-[15vh]">
      <div className="flex flex-col items-center h-full pt-[15vh]">
        <div className="flex flex-col gap-5 text-center">
          <p className="text-5xl">KaraMonke is working...</p>
          <p className="text-xl">We're generating some music we think you'd like!</p>
        </div>

        <ScaleLoader color="white" width="8vw" height="17vh" className="pt-[7vh]" />
      </div>
      <ButtonPrimary className="w-full">
        <Link href="/playlists/output">
          <p>Next</p>
        </Link>
      </ButtonPrimary>
    </Container>
  );
};

export default Playlist;
