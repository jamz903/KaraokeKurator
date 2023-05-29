import { Container } from "app/components/common/boxes/container";
import ButtonPrimary from "app/components/common/buttons/button-primary";
import TextInputField from "app/components/common/inputs/TextInputField";
import Link from "next/link";
import { IoMdArrowBack } from "react-icons/io";

const Age = () => {
  return (
    <Container className="flex flex-col align-center h-screen justify-between pb-[15vh]">
      <Link href="/" className="pt-[7vh]">
        <IoMdArrowBack className="h-8 w-8" />
      </Link>
      <div className="flex flex-col align-start gap-[15vh]">
        <div className="flex flex-col gap-5 text-center">
          <p className="text-5xl">What is your age?</p>
          <p className="text-2xl">Input your age from 5-100</p>
        </div>

        <TextInputField
          type="number"
          placeholder="10"
          className="border-0 text-center underline text-6xl text-white-600"
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

export default Age;
