import styled, { css } from "styled-components";

export const SliderWrapper = styled("div")`
  position: relative;

  height: 270px;
  width: 1440px;

  /* padding-left: 135px; */
  /* margin-left: auto;
  margin-right: auto; */

  overflow: hidden;

  /* background-color: white; */
  outline: 1px solid red;
`;

export const SliderContainer = styled("ul")<{ step: number }>`
  position: absolute;

  top: 0;
  left: calc(135px + ${(p) => p.step}px);
  /* left: 135px; */
  z-index: 0;

  display: flex;

  height: 100%;
`;

export const ProdCard = styled("li")`
  width: 264px;
  height: 100%;

  margin-right: 24px;
  background-color: grey;

  &:last-child {
    margin-right: 0;
  }
`;

export const BackwardIconWrapper = styled("div")`
  left: 63px;
  ${iconWrapperCSS()}
`;

export const ForwardIconWrapper = styled("div")`
  right: 63px;
  ${iconWrapperCSS()}
`;

export const SliderBackdrop = styled("div")`
  position: absolute;
  top: 0;
  left: 0;

  z-index: 1;

  width: 100%;
  height: 100%;

  /* background-color: black; */
  background-image: linear-gradient(
    to right,
    rgba(245, 243, 241, 1) 135px,
    rgba(0, 0, 0, 0) 135px,
    rgba(0, 0, 0, 0) 89%,
    rgba(245, 243, 241, 0.9) 89%,
    rgba(245, 243, 241, 0.9)
  );
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
