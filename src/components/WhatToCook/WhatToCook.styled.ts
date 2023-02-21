import styled from "styled-components";
import otherReciepsBgd from "assets/images/whatToCook/otherReciepsBgd.png";
import otherReciepsBgdSmall from "assets/images/whatToCook/otherReciepsBgdSmall.png";
import { theme } from "constants/theme";

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

export const Recipe = styled(CardItem)<{
  backgroundUrl: string;
  backgroundColor: string;
}>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 56px;

  border-radius: 24px;
  background: url(${(p) => p.backgroundUrl});
  background-repeat: no-repeat;
  background-size: 60%;
  background-position: center;
  background-color: ${(p) => p.backgroundColor};

  ${theme.mq.mobileOnly} {
    padding: 24px 184px 24px 32px;
    background-size: 50%;
    background-position: top 50% right 20px;
    align-items: flex-start;
  }
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
  padding: 32px 48px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  background: url(${otherReciepsBgd.src});
  background-color: #4c7c7d;
  background-repeat: no-repeat;
  background-position: right;

  ${theme.mq.mobileOnly} {
    padding: 18px 32px;
    background: url(${otherReciepsBgdSmall.src});
    background-color: #4c7c7d;
    background-repeat: no-repeat;
    background-position: right;
  }
`;

export const CardSubscribeForRecipes = styled(SmallCard)`
  background-color: #edeae7;
`;

// export const ReceipeTitleWrapper = styled("div")`

// `;

export const RecipeTitle = styled("h3")<{ color: string }>`
  margin-bottom: 16px;

  font-size: 32px;
  line-height: 1;
  letter-spacing: 0.02em;

  text-align: center;

  color: ${(p) => p.color};

  ${theme.mq.mobileOnly} {
    margin-bottom: 6px;
    text-align: left;
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const ReceipeAuthor = styled("p")`
  text-align: center;
  font-size: 13px;
  line-height: 1.692;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: rgba(56, 54, 52, 0.9);

  ${theme.mq.mobileOnly} {
    text-align: left;
    font-size: 9px;
    line-height: 1.777;
  }
`;
