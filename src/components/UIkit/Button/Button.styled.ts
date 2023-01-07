import styled from "styled-components";
import { getUIBaseStyles, IBaseProps } from "../base/uiBaseProps";

export const StyledButton = styled("button")<IBaseProps>`
  margin: 0;
  padding: 0;
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: ${(p) => p.theme.fontFamily};
  font-weight: ${(p) => p.theme.fontWeight.medium};
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
