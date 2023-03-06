import { theme } from "constants/theme";
import styled, { css } from "styled-components";

export const SliderWrapper = styled("div")`
  position: relative;

  height: 270px;

  overflow: hidden;

  ${theme.mq.mobileOnly} {
    height: 192px;
    width: 375px;
    /* overflow-x: scroll; */
    padding-left: 16px;
    padding-right: 16px;
  }

  ${theme.mq.tablet} {
    width: 768px;
  }

  ${theme.mq.desktop} {
    width: 1440px;
  }

  /* outline: 1px solid red; */
`;

export const SliderContainer = styled("ul")<{
  position: number[];
  steps: number[];
}>`
  position: absolute;

  top: 0;
  z-index: 0;

  display: flex;
  height: 100%;

  ${theme.mq.mobileOnly} {
    position: static;
    overflow-x: scroll;
    overflow-y: hidden;
    /* padding-bottom: 17px; */

    /* left: 16px; */
    /* transform: translateX(${(p) => p.position[0]}px); */
  }

  ${theme.mq.tablet} {
    left: 75px;
    transform: translateX(${(p) => p.position[1]}px);
  }

  ${theme.mq.desktop} {
    left: 135px;
    transform: translateX(${(p) => p.position[2]}px);
  }

  transition: transform ${(p) => p.theme.transitionTiming};
`;

export const ProdCard = styled("li")`
  flex-shrink: 0;

  width: 264px;
  height: 100%;
  padding-top: 40px;
  margin-right: 24px;

  /* background-color: grey; */
  ${theme.mq.mobileOnly} {
    margin-right: 7px;
    width: 168px;
    padding-top: 16px;
  }

  &:last-child {
    margin-right: 0;
  }
`;

export const BackwardIconWrapper = styled("div")`
  ${theme.mq.mobileOnly} {
    display: none;
  }

  ${theme.mq.tablet} {
    left: 15px;
  }

  ${theme.mq.desktop} {
    left: 63px;
  }

  ${iconWrapperCSS()}
`;

export const ForwardIconWrapper = styled("div")`
  ${theme.mq.mobileOnly} {
    display: none;
  }

  ${theme.mq.tablet} {
    right: 15px;
  }

  ${theme.mq.desktop} {
    right: 63px;
  }
  ${iconWrapperCSS()}
`;

export const SliderBackdrop = styled("div")`
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;

  z-index: 1;

  width: 100%;
  height: 100%;

  /* background-color: black; */

  ${theme.mq.mobileOnly} {
    background-color: transparent;
  }

  ${theme.mq.tablet} {
    background-image: linear-gradient(
      to right,
      rgba(245, 243, 241, 1) 75px,
      rgba(0, 0, 0, 0) 75px,
      rgba(0, 0, 0, 0) 81%,
      rgba(245, 243, 241, 0.6) 200px,
      rgba(245, 243, 241, 0.6)
    );
  }

  ${theme.mq.desktop} {
    background-image: linear-gradient(
      to right,
      rgba(245, 243, 241, 1) 135px,
      rgba(0, 0, 0, 0) 135px,
      rgba(0, 0, 0, 0) 89%,
      rgba(245, 243, 241, 0.6) 153px,
      rgba(245, 243, 241, 0.6)
    );
  }
`;

//------------------------Helper functions
function iconWrapperCSS() {
  return css`
    position: absolute;
    top: 50%;

    z-index: 2;
    transform: translateY(-50%);

    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 50px;
    height: 50px;

    border-radius: 50%;

    background-color: ${(p) => p.theme.colors.cardBackground};
    box-shadow: 0px 10px 20px -10px rgba(56, 54, 52, 0.08);
  `;
}
