import { Button } from "components/UIkit";
import { Attention, ButtonWrapper, SignUpWrapper, Text } from "./SignUp.styled";

const SignUp = () => {
  return (
    <SignUpWrapper>
      <p>
        <Attention>
          Accumulative system of discounts for regular customers!
        </Attention>
      </p>
      <Text>
        Our online store has an accumulation system of discounts for regular
        customers. Sign up and earn discount levels as your total purchases
        increase.
      </Text>

      <ButtonWrapper>
        <Button
          text="Sign up"
          color="#F5F3F1"
          backgroundColor="#383634"
          mt="24px"
          pt="16px"
          pb="16px"
          width="100%"
        />
      </ButtonWrapper>
    </SignUpWrapper>
  );
};

export default SignUp;
