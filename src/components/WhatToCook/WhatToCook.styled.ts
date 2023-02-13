import { theme } from "constants/theme";
import styled from "styled-components";

export const MainWrapper = styled("div")`
  width: 100%;
  display: flex;
  column-gap: 30px;
  flex-wrap: wrap;

  ${theme.mq.mobileOnly} {
    padding-left: 16px;
    padding-right: 16px;
    row-gap: 16px;
  }

  ${theme.mq.tabletOnly} {
    row-gap: 30px;
  }
`;

const CardItem = styled("div")`
  /* width: 370px; */
  height: 454px;

  ${theme.mq.mobileOnly} {
    height: 160px;
    flex-basis: 100%;
  }

  ${theme.mq.tabletOnly} {
    flex-basis: calc((100% - 30px) / 2);
  }

  ${theme.mq.desktop} {
    flex-basis: calc((100% - 60px) / 3);
  }
`;

export const Recipe = styled(CardItem)`
  border-radius: 24px;
  background-color: coral;
`;

export const RestCardsContainer = styled(CardItem)`
  display: flex;

  ${theme.mq.mobileOnly} {
    height: auto;
    flex-basis: 100%;
    flex-direction: column;
    row-gap: 16px;
  }

  ${theme.mq.tabletOnly} {
    height: auto;
    flex-basis: 100%;
    flex-direction: row;
    column-gap: 30px;
  }

  ${theme.mq.desktop} {
    flex-direction: column;
    row-gap: 30px;
  }
`;

const SmallCard = styled("div")`
  height: 212px;
  border-radius: 24px;

  ${theme.mq.mobileOnly} {
    height: 160px;
  }

  ${theme.mq.tabletOnly} {
    flex-basis: calc((100% - 30px) / 2);
  }
`;

export const CardOtherRecipes = styled(SmallCard)`
  background-color: aqua;
`;

export const CardSubscribeForRecipes = styled(SmallCard)`
  background-color: bisque;
`;
