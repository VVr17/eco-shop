import styled from "styled-components";
import { getUIBaseStyles, IBaseProps } from "../base/uiBaseProps";

export const Input = styled("input")<IBaseProps>`
  display: block;
  padding: 0;
  margin: 0;
  border: none;

  // uiBaseStyles
  ${(p) => getUIBaseStyles(p, p.theme)}

  &:focus,
  &:focus-visible {
    outline: 1px solid ${(p) => p.theme.colors.accent};
  }
`;
