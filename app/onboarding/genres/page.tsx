"use client";
import { Container } from "app/components/common/boxes/container";
import ButtonPrimary from "app/components/common/buttons/button-primary";
import Link from "next/link";
import { IoMdArrowBack } from "react-icons/io";
import Select from "react-select";

const Genres = () => {
  const options = [
    { value: "Indie Pop", label: "Indie Pop" },
    { value: "Some", label: "Indie Pop" },
    { value: "Pop", label: "Indie Pop" },
    { value: "Poop", label: "Indie Pop" },
    { value: "Pooop", label: "Indie Pop" },
    { value: "Pooooop", label: "Indie Pop" },
    { value: "Poooooop", label: "Indie Pop" }
  ];
  return (
    <Container className="flex flex-col align-center h-screen justify-between pb-[15vh]">
      <Link href="/" className="pt-[7vh]">
        <IoMdArrowBack className="h-8 w-8" />
      </Link>
      <div className="flex flex-col self-start h-full pt-[5vh]">
        <div className="flex flex-col gap-5 text-center">
          <p className="text-3xl">Pick your favourite genres</p>
          <p className="text-xl">As many as you'd like!</p>
        </div>

        <Select
          className="text-black-600 pt-5"
          closeMenuOnSelect={false}
          options={options}
          isMulti
        />
      </div>
      <ButtonPrimary className="w-full">
        <Link href="/onboarding/genres">
          <p>Next</p>
        </Link>
      </ButtonPrimary>
    </Container>
  );
};

export default Genres;
