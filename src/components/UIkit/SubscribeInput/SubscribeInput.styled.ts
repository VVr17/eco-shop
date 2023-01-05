import styled from "styled-components";
import {
  DEFAULT_STYLES_VALUE,
  getUIBaseStyles,
  IBaseProps,
} from "../base/uiBaseProps";

export const SubscribeForm = styled("form")<IBaseProps>`
  position: relative;
  width: ${(p) => (p.width === DEFAULT_STYLES_VALUE ? "270px" : p.width)};
`;

export const Input = styled("input")<IBaseProps>`
  display: block;

  /* border-width: 1px; */

  //Base ui styles
  ${(p) => getUIBaseStyles(p, p.theme)}
  width: 100%;
  padding: 11px 46px 11px 16px;
  border-radius: 10px;
  border: none;
  /* border-color: black; */
`;

export const SubmitButton = styled("button")`
  margin: 0;
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0;
  right: 0;

  height: 100%;
  width: 40px;
  color: ${(p) => p.theme.colors.lightText};

  /* color: ${(p) => p.theme.colors.mainText}; */

  background: #383634;
  box-shadow: 0px 9px 8px -8px rgba(0, 0, 0, 0.06);
  border-radius: 0px 10px 10px 0px;
`;
