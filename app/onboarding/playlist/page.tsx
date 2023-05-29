"use client";
import { Container } from "app/components/common/boxes/container";
import ButtonPrimary from "app/components/common/buttons/button-primary";
import TextInputField from "app/components/common/inputs/TextInputField";
import Link from "next/link";
import { IoMdArrowBack } from "react-icons/io";

const Playlist = () => {
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

        <TextInputField className="mt-10" placeholder={"Enter a Spotify link"} />
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
