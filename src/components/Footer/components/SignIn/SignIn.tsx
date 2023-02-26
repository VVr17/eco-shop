import Conditions from "../Conditions";
import { SubscribeInput } from "components/UIkit";
import { useWindowSize } from "hooks/useWindowSize";
import { SignInWrapper, Title } from "./SignIn.styled";

const SignIn = () => {
  const { isDesktop } = useWindowSize();

  return (
    <SignInWrapper>
      <Title>Get our newsletters:</Title>
      <SubscribeInput />
      {isDesktop && <Conditions />}
    </SignInWrapper>
  );
};

export default SignIn;
