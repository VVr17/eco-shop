import Box from "components/Box";
import Container from "components/Container";
import Dashboard from "./Dashboard";
import SignUp from "./SignUp";
import {
  BlockWrapper,
  BonusIconStyled,
  BonusProgramContainer,
  IconWrapper,
  Title,
} from "./BonusProgram.styled";
import HomePageContainer from "components/HomePageContainer";

const BonusProgram = () => {
  return (
    <Container>
      <HomePageContainer>
        <BonusProgramContainer>
          <Title>
            <IconWrapper>
              <BonusIconStyled />
            </IconWrapper>
            Bonus program
          </Title>
          <BlockWrapper>
            <Dashboard maxDiscountingValue={1000} cutomerCurrentValue={426} />
            <SignUp />
          </BlockWrapper>
        </BonusProgramContainer>
      </HomePageContainer>
    </Container>
  );
};

export default BonusProgram;
