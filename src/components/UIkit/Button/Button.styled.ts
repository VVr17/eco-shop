import styled from "styled-components";
<<<<<<< HEAD
import { IBaseProps } from "../base/uiBaseProps";

export const ButtonBackdrop = styled("span")`
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;

  background-color: rgb(0, 0, 0);
  opacity: 0;
  transition: opacity ${(p) => p.theme.transitionTiming};
`;

// {
//   backgroundColor: string;
//   color: string;
//   borderColor: string;
//   borderRadius: string;
//   pl: string;
//   pr: string;
//   pt: string;
//   pb: string;
//   width: string;
//   height: string;
//   fontSize: string;
// }
=======
import { getUIBaseStyles, IBaseProps } from "../base/uiBaseProps";
>>>>>>> main

export const StyledButton = styled("button")<IBaseProps>`
  margin: 0;
  padding: 0;
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: ${(p) => p.theme.fontFamily};
  font-weight: ${(p) => p.theme.fontWeight.normal};
  line-height: 1.25;

  border-width: 1px;

  transition: background-color ${(p) => p.theme.transitionTiming};

  // uiBaseStyles
  ${(p) => getUIBaseStyles(p, p.theme)}
`;

export const IconLeftWrapper = styled("span")<{
  iconMargin: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  margin-right: ${(p) => (p.iconMargin === "default" ? "12px" : p.iconMargin)};
`;

export const IconRightWrapper = styled("span")<{
  iconMargin: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  margin-left: ${(p) => (p.iconMargin === "default" ? "12px" : p.iconMargin)};
`;
