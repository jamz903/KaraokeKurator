import Image from "next/image";
import LogoFull from "public/logo_full.svg";
import ButtonGhost from "./components/common/buttons/button-ghost";
import ButtonPrimary from "./components/common/buttons/button-primary";
import { Container } from "./components/common/boxes/container";
import Link from "next/link";

export default function Home() {
  return (
    <Container className="flex flex-col items-center pt-[15vh]">
      <div className="flex flex-col items-center">
        <Image src={LogoFull} alt="Logo" />
        <div className="pt-5 flex flex-col items-center">
          <p className="text-5xl font-title">KaraMonke</p>
          <p className="text-lg">Your ultimate song selector</p>
        </div>
      </div>
      <div className="flex flex-col w-[80%] gap-5 pt-[5vh]">
        <ButtonPrimary>
          <Link href="/auth/signUp">
            <p>Sign Up</p>
          </Link>
        </ButtonPrimary>
        <ButtonGhost>
          <Link href="/auth/login">
            <p>Login</p>
          </Link>
        </ButtonGhost>
      </div>
    </Container>
  );
}
