import styled from "styled-components";
import {
  DEFAULT_STYLES_VALUE,
  getUIBaseStyles,
  IBaseProps,
} from "../base/uiBaseProps";

export const SearchForm = styled("form")<IBaseProps>`
  position: relative;
  width: ${(p) => (p.width === DEFAULT_STYLES_VALUE ? "240px" : p.width)};
`;

export const SearchField = styled("input")<IBaseProps>`
  display: block;

  border-width: 1px;
  /* color: ${(p) => p.theme.colors.mainText}; */

  // uiBaseStyles
  ${(p) => getUIBaseStyles(p, p.theme)}
  width: 100%;

  &::placeholder {
    /* color: ${(p) => p.color}; */
    opacity: 0.5;
  }

  &:focus,
  &:focus-visible {
    outline: 1px solid ${(p) => p.theme.colors.accent};
  }
`;

export const SearchButton = styled("button")<{ iconMargin: string }>`
  margin: 0;
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0;
  right: ${(p) =>
    p.iconMargin === DEFAULT_STYLES_VALUE ? "16px" : p.iconMargin};

  height: 100%;

  color: ${(p) => p.theme.colors.mainText};

  background-color: transparent;
`;
