import styled from "styled-components";
import { theme } from "constants/theme";
// import {
//   ArrowLeftDownIcon,
//   ArrowRightUpIcon,
//   ArrowRightDownIcon,
// } from "assets/icons/homePageIcons";
// import arrow from "assets/icons/homePageIcons/arrow-right-up.svg";

export const List = styled("ul")`
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 24px;

  ${theme.mq.desktop} {
    height: 170px;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Item = styled("li")`
  position: relative;
  display: flex;
  align-items: center;

  align-self: flex-end;

  ${theme.mq.desktop} {
    align-self: flex-start;
  }

  &:nth-child(1),
  &:nth-child(3) {
    align-self: flex-start;

    ${theme.mq.desktop} {
      align-self: flex-end;

      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        right: -30px;
        width: 100%;
        height: 100%;

        /* background-color: grey; */
      }
    }
  }
`;

export const Meta = styled("div")`
  width: 150px;
  margin-left: 24px;

  ${theme.mq.tabletOnly} {
    /* height: 140px; */
    width: 200px;
    margin-left: 50px;
  }
`;

export const Label = styled("h3")`
  margin-bottom: ${(p) => p.theme.space[3]};
  font-size: 20px;
  line-height: 1.2;

  ${theme.mq.mobileOnly} {
    font-size: 15px;
  }
`;

export const Text = styled("p")`
  font-size: 16px;
  line-height: 1.5;

  ${theme.mq.mobileOnly} {
    font-size: 14px;
    line-height: 1.42;
  }
`;
