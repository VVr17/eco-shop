import Box from "components/Box";
import Container from "components/Container";
import Dashboard from "./Dashboard";
import SignUp from "./SignUp";
import { BlockWrapper, BonusProgramContainer } from "./BonusProgram.styled";
import HomePageContainer from "components/HomePageContainer";
import HomePageTitle from "components/HomePageTitle";
import { BonusIcon } from "assets/icons/homePageIcons";

const BonusProgram = () => {
  return (
    <>
      <Container>
        <Box borderTop="1px solid rgba(56, 54, 52, 0.08)"></Box>
      </Container>
      <HomePageContainer>
        <Container>
          <HomePageTitle title="Bonus program" icon={BonusIcon} />
          <BonusProgramContainer>
            <BlockWrapper>
              <Dashboard maxDiscountingValue={1000} cutomerCurrentValue={426} />
              <SignUp />
            </BlockWrapper>
          </BonusProgramContainer>
        </Container>
      </HomePageContainer>
      <Container>
        <Box borderTop="1px solid rgba(56, 54, 52, 0.08)"></Box>
      </Container>
    </>
  );
};

export default BonusProgram;
