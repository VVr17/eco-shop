import { theme } from "constants/theme";
import styled from "styled-components";

export const BannerContainer = styled("div")`
  margin: 0 auto;
  width: 100%;

  /* ${theme.mq.mediumMobileOnly} {
    width: ${({ theme }) => theme.breakpoints[0]};
  }

  ${theme.mq.tablet} {
    width: ${({ theme }) => theme.breakpoints[1]};
  } */

  ${theme.mq.desktop} {
    width: ${({ theme }) => theme.breakpoints[2]};
    padding: 8px 8px 0 8px;
  }
`;

export const List = styled("ul")`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
`;

export const Item = styled("li")``;

export const LongBanner = styled("div")`
  width: 936px;
  height: 454px;
  outline: 1px solid red;
`;

export const ShortBanner = styled("div")`
  margin-left: 8px;
  width: 480px;
  height: 454px;
  outline: 1px solid brown;
`;
