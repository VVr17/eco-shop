import { getUIBaseStyles, IBaseProps } from "components/UIkit/base/uiBaseProps";
import styled from "styled-components";

export const StyledSelect = styled("input")<IBaseProps>`
  cursor: pointer;

  //IbaseStyles
  ${(p) => getUIBaseStyles(p, p.theme)}
  width: 100%;
  border-width: 1px;

  &:focus,
  &:focus-visible {
    border-color: transparent;
    outline: 1px solid ${(p) => p.theme.colors.accent};
  }

  &.hasError {
    outline: 1px solid ${(p) => p.theme.colors.secondaryAccent};
  }
`;

export const IconWrapper = styled("span")`
  position: absolute;
  top: 0;
  right: 0;

  height: 100%;
  width: 52px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;

  pointer-events: none;
`;

export const DropDownListWrapper = styled("div")`
  position: absolute;
  z-index: 999;
  top: calc(100% + 2px);
  left: 0;
  transform-origin: top;

  /* transform: translateY(100%); */

  //IbaseStyles
  ${(p) => getUIBaseStyles(p, p.theme)}
  width: 100%;
  border-width: 1px;

  //Animation
  /* animation: 1s linear 0s infinite alternate dropdown-animation; */
  animation-name: dropdown-animation;
  animation-duration: 250ms;
  animation-timing-function: linear;

  @keyframes dropdown-animation {
    0% {
      transform: scaleY(0);
    }
    100% {
      transform: scaleY(1);
    }
  }
`;

export const DropDownList = styled("ul")`
  max-height: 300px;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 6px;
    background-color: transparent;
  }

  /* &::-webkit-scrollbar-track {
    background: #f1f1f1;
  } */

  &::-webkit-scrollbar-thumb {
    background-color: ${(p) => p.theme.colors.mainText};
  }
`;

export const DropDownItem = styled("li")`
  cursor: pointer;
  padding-top: 7px;
  padding-bottom: 7px;

  border-bottom: 1px solid ${(p) => p.theme.colors.input};

  &:last-child {
    border-bottom: none;
  }

  transition: background-color ${(p) => p.theme.transitionTiming};
  &:hover {
    background-color: ${(p) => p.theme.colors.input};
  }
`;
