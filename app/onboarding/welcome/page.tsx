import { Container } from "app/components/common/boxes/container";
import ButtonPrimary from "app/components/common/buttons/button-primary";
import Link from "next/link";

const Welcome = () => {
  return (
    <Container className="flex flex-col align-center h-screen justify-between pb-[15vh]">
      <div className="flex flex-col align-start">
        <div className="flex flex-col mt-[12vh] gap-3">
          <p className="text-5xl">Welcome to KaraMonke</p>
          <p className="text-lg">Your ultimate song selector</p>
        </div>

        <div className="flex flex-col gap-6 pt-10 w-[80%] text-xl">
          <p>Don't know what song to sing next during karaoke?</p>
          <p>
            KaraMonke recommends songs based on your{" "}
            <span className="text-primary-600">preferences</span> and{" "}
            <span className="text-primary-600">singing ability.</span>
          </p>
          <p>
            We learn your favourite songs by analyzing your{" "}
            <span className="text-primary-600">Spotify playlists.</span>
          </p>
        </div>
      </div>
      <ButtonPrimary className="w-full">
        <Link href="/onboarding/playlist">
          <p>Next</p>
        </Link>
      </ButtonPrimary>
    </Container>
  );
};

export default Welcome;
