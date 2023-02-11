import { BonusIcon } from "assets/icons/homePageIcons";
import { theme } from "constants/theme";
import styled from "styled-components";

export const BonusProgramContainer = styled("div")`
  width: 100%;

  ${theme.mq.tabletOnly} {
    width: 570px;
  }
`;

export const BlockWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${theme.mq.desktop} {
    flex-direction: row;
    align-items: center;
  }
`;

export const Title = styled("h2")`
  width: 100%;
  margin-bottom: 40px;
  display: flex;
  align-items: center;

  font-size: ${(p) => p.theme.fontSizes.xl};
  line-height: 1.2;

  ${theme.mq.mobileOnly} {
    font-size: ${(p) => p.theme.fontSizes.l};
  }

  ${theme.mq.desktop} {
    margin-bottom: 59px;
  }
`;

export const IconWrapper = styled("span")`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 30px;

  ${theme.mq.mobileOnly} {
    /* width: 32px; */
    height: 32px;
  }
`;

export const BonusIconStyled = styled(BonusIcon)`
  height: 40px;
  width: 40px;

  ${theme.mq.mobileOnly} {
    width: 32px;
    height: 32px;
  }
`;
