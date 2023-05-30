import { Container } from "app/components/common/boxes/container";
import ButtonPrimary from "app/components/common/buttons/button-primary";
import TextInputField from "app/components/common/inputs/TextInputField";
import Link from "next/link";
import { IoMdArrowBack } from "react-icons/io";

const Login = () => {
  return (
    <Container>
      <div className="flex flex-col pt-[7vh] gap-20">
        <Link href="/">
          <IoMdArrowBack className="h-8 w-8" />
        </Link>
        <div className="flex flex-col items-center">
          <p className="text-4xl font-title">KaraMonke</p>
          <p className="text-lg">Your ultimate song collector</p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="flex flex-col w-full">
            <TextInputField header="Email" placeholder={"hello@gmail.com"} type="email" />
            <TextInputField header="Password" placeholder={""} type="password" />
          </div>
          <Link href="/auth/resetPassword">
            <p className="text-sm pt-3 text-primary-600">Forgot Password?</p>
          </Link>
        </div>

        <div className="flex flex-col items-center">
          <ButtonPrimary className="w-full mb-3">
            <Link href="/onboarding/welcome">
              <p>Login</p>
            </Link>
          </ButtonPrimary>
          <div className="flex">
            <p className="text-sm mr-1">Don't have an account?</p>
            <Link href="/auth/signUp">
              <p className="text-sm underline text-primary-600">Sign up</p>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;
