import Container from "components/Container";
import HomePageContainer from "components/HomePageContainer";
import HomePageTitle from "components/HomePageTitle";
import watermalonPic from "assets/images/whatToCook/watermelon.png";
import asparagusPic from "assets/images/whatToCook/asparagus.png";

import { WhatToCookIcon } from "assets/icons/homePageIcons";

import {
  MainWrapper,
  Recipe,
  RestCardsContainer,
  CardOtherRecipes,
  CardSubscribeForRecipes,
  RecipeTitle,
  ReceipeAuthor,
  Label,
  Input,
} from "./WhatToCook.styled";
import Image from "next/image";
import Box from "components/Box";
import { Button } from "components/UIkit";
import { useWindowSize } from "hooks/useWindowSize";

const WhatToCook = () => {
  const { isDesktop, isMobile, isTablet } = useWindowSize();

  return (
    <>
      <Container>
        <Box borderTop="1px solid rgba(56, 54, 52, 0.08)"></Box>
      </Container>
      <HomePageContainer>
        <Container>
          <HomePageTitle title="What to cook?" icon={WhatToCookIcon} />

          <MainWrapper>
            <Recipe
              backgroundUrl={watermalonPic.src}
              backgroundColor="rgba(228, 89, 89, 0.1)"
            >
              <Box>
                <RecipeTitle color="#C64444">Watermelon</RecipeTitle>
                <ReceipeAuthor>Recipes with Anna Grace</ReceipeAuthor>
              </Box>
              <Button
                text="Read more"
                backgroundColor="transparent"
                color="#E45959"
                borderColor="#E45959"
                fontSize={isMobile ? "14px" : "15px"}
                pt={isMobile ? "10px" : "12px"}
                pb={isMobile ? "10px" : "12px"}
                pl={isMobile ? "10px" : "20px"}
                pr={isMobile ? "10px" : "20px"}
              />
            </Recipe>

            <Recipe
              backgroundUrl={asparagusPic.src}
              backgroundColor="rgba(76, 124, 125, 0.1)"
            >
              <Box>
                <RecipeTitle color="#355F60">Asparagus</RecipeTitle>
                <ReceipeAuthor>Recipes with Anna Grace</ReceipeAuthor>
              </Box>
              <Button
                text="Read more"
                backgroundColor="transparent"
                color="accent"
                borderColor="accent"
                fontSize={isMobile ? "14px" : "15px"}
                pt={isMobile ? "10px" : "12px"}
                pb={isMobile ? "10px" : "12px"}
                pl={isMobile ? "10px" : "20px"}
                pr={isMobile ? "10px" : "20px"}
              />
            </Recipe>

            <RestCardsContainer>
              <CardOtherRecipes>
                <Box>
                  <Box
                    as="h3"
                    color="input"
                    mb={10}
                    fontSize={isMobile ? "26px" : "36px"}
                  >
                    200+
                  </Box>
                  <Box
                    as="p"
                    color="input"
                    fontSize={isMobile ? "17px" : "20px"}
                  >
                    Healthy recipes
                  </Box>
                </Box>
                <Button
                  text="View all"
                  backgroundColor="transparent"
                  color="mainBackground"
                  borderColor="mainBackground"
                  fontSize="15px"
                  width="160px"
                />
              </CardOtherRecipes>
              <CardSubscribeForRecipes>
                <Box
                  as="form"
                  height="100%"
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                >
                  <Label>
                    Don’t miss the new posts
                    <Input type="email" name="email" placeholder="Your email" />
                  </Label>
                  <Button
                    type="submit"
                    text="Subscribe now"
                    width="100%"
                    backgroundColor="accent"
                    color="lightText"
                    pt="13px"
                    pb="13px"
                  />
                </Box>
              </CardSubscribeForRecipes>
            </RestCardsContainer>
          </MainWrapper>
        </Container>
      </HomePageContainer>
    </>
  );
};

export default WhatToCook;
