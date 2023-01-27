import styled from "styled-components";
import {
  DEFAULT_STYLES_VALUE,
  getUIBaseStyles,
  IBaseProps,
} from "../base/uiBaseProps";

export const Label = styled.label`
  position: relative;
  /* width: 100%; */
  display: block;
  margin-bottom: ${({ theme }) => theme.space[3]};
`;

export const SearchField = styled.input`
  display: block;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: ${({ theme }) => theme.space[3]};
  padding-right: ${({ theme }) => theme.space[3]};
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.mainText};
  font-size: ${({ theme }) => theme.fontSizes.xs};

  &::placeholder {
    color: ${({ theme }) => theme.colors.secondaryText};
  }

  &:focus,
  &:focus-visible {
    outline: 1px solid ${(p) => p.theme.colors.accent};
  }
`;

export const SearchIcon = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  padding-left: ${({ theme }) => theme.space[3]};
  padding-right: ${({ theme }) => theme.space[3]};

  color: ${(p) => p.theme.colors.mainText};
  background-color: transparent;
`;
