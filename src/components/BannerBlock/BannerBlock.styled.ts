import styled from "styled-components";
import visuallyHiddenCSS from "utils/visuallyHidden";
import { theme } from "constants/theme";

export const BannerContainer = styled("div")`
  margin: 0 auto;
  width: 100%;
  padding: 8px 8px 0 8px;

  ${theme.mq.mobileOnly} {
    width: ${({ theme }) => theme.breakpoints[0]};
  }

  ${theme.mq.tablet} {
    width: ${({ theme }) => theme.breakpoints[1]};
  }

  ${theme.mq.desktop} {
    width: ${({ theme }) => theme.breakpoints[2]};
  }

  @media screen and (max-width: calc(${({ theme }) =>
      theme.breakpoints[0]} - 1px)) {
    & {
      ${visuallyHiddenCSS()}
    }
  }
`;

export const ListWrapper = styled("div")`
  position: relative;

  ${theme.mq.mobileOnly} {
    height: 286px;
    overflow: hidden;
  }
`;

export const List = styled("ul")<{ pos: 1 | 2 }>`
  display: flex;

  ${theme.mq.mobileOnly} {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    transform: translateX(${(p) => (p.pos === 1 ? "0" : "-50%")});
    /* transform: translateX(-50%); */
    transition: transform ${(p) => p.theme.transitionTiming};
  }

  ${theme.mq.tablet} {
    width: 100%;
    margin-left: auto;
    margin-right: auto;

    column-gap: 8px;
  }
`;

export const Item = styled("li")`
  height: 100%;

  ${theme.mq.mobileOnly} {
    width: 359px;
  }

  ${theme.mq.tablet} {
    height: 300px;
  }
  ${theme.mq.desktop} {
    height: 454px;
  }
`;

export const LongBanner = styled("div")`
  height: 100%;

  /* background-color: antiquewhite; */

  ${theme.mq.mobileOnly} {
    /* height: 286px; */
    width: 359px;
  }

  ${theme.mq.tablet} {
    width: 372px;
  }

  ${theme.mq.desktop} {
    width: 936px;
  }
`;

export const ShortBanner = styled("div")`
  height: 100%;

  /* background-color: azure; */

  ${theme.mq.mobileOnly} {
  }

  ${theme.mq.tablet} {
    width: 372px;
  }

  ${theme.mq.desktop} {
    width: 480px;
  }
`;

export const Dots = styled("ul")`
  margin-top: ${(p) => p.theme.space[3]};
  display: flex;
  justify-content: center;
  column-gap: 8px;

  ${theme.mq.tablet} {
    display: none;
  }

  @media screen and (max-width: calc(${({ theme }) =>
      theme.breakpoints[0]} - 1px)) {
    & {
      ${visuallyHiddenCSS()}
    }
  }
`;

export const Dot = styled("li")<{ active: boolean }>`
  cursor: pointer;
  width: 8px;
  height: 8px;

  border-radius: 50%;
  background-color: rgba(
    56,
    54,
    52,
    ${({ active }) => (active ? "0.8" : "0.4")}
  );
`;
