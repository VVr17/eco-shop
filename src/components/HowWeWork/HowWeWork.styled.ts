import styled, { css } from "styled-components";
import { theme } from "constants/theme";
import HomePageTitle from "components/HomePageTitle";

export const List = styled("ul")`
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 24px;

  ${theme.mq.desktop} {
    margin-top: 80px;
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

export const ArrowWrapper = styled("div")<{
  width: string;
  right?: string;
  left?: string;
  top?: string;
  bottom?: string;
}>`
  position: absolute;

  ${({ right, left, top, bottom, width }) => {
    return css`
      left: ${left};
      right: ${right};
      top: ${top};
      bottom: ${bottom};
      width: ${width};
    `;
  }};

  @media screen and (max-width: 340px) {
    display: none;
  }
`;
