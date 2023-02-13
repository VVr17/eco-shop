import Container from "components/Container";
import HomePageContainer from "components/HomePageContainer";
import HomePageTitle from "components/HomePageTitle";
import { WhatToCookIcon } from "assets/icons/homePageIcons";

import {
  MainWrapper,
  Recipe,
  RestCardsContainer,
  CardOtherRecipes,
  CardSubscribeForRecipes,
} from "./WhatToCook.styled";

const WhatToCook = () => {
  return (
    <HomePageContainer>
      <Container>
        <HomePageTitle title="What to cook?" icon={WhatToCookIcon} />

        <MainWrapper>
          <Recipe>recipe1</Recipe>
          <Recipe>recipe2</Recipe>

          <RestCardsContainer>
            <CardOtherRecipes>other recipes</CardOtherRecipes>
            <CardSubscribeForRecipes>
              subscribeToRecipes
            </CardSubscribeForRecipes>
          </RestCardsContainer>
        </MainWrapper>
      </Container>
    </HomePageContainer>
  );
};

export default WhatToCook;
