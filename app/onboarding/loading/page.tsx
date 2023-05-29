"use client";
import { Container } from "app/components/common/boxes/container";
import ButtonPrimary from "app/components/common/buttons/button-primary";
import Link from "next/link";
import { ScaleLoader } from "react-spinners";

const Playlist = () => {
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
        <Link href="/onboarding/loading">
          <p>Next</p>
        </Link>
      </ButtonPrimary>
    </Container>
  );
};

export default Playlist;
