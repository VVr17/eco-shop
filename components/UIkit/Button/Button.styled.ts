import styled from "styled-components";
import { isWhiteSpaceLike } from "typescript";

export const StyledButton = styled("button")<{ backgroundColor: string }>`
  display: flex;
  align-items: center;

  cursor: pointer;

  margin: 0;
  padding: 0;
  border: none;

  font-family: ${(p) => p.theme.fontFamily};
  font-weight: ${(p) => p.theme.fontWeight.normal};
  /* font-size: ${(p) => p.theme.fontSizes.s}; */
  font-size: 15px;
  line-height: 20px;

  padding: 12px 16px;

  border-width: 1px;
  border-style: solid;
  border-color: ${(p) => p.theme.colors.input};
  border-radius: 10px;

  /* background-color: ${(p) => p.theme.colors.cardBackground}; */
  background-color: ${(p) => {
    const color = p.backgroundColor;
    const themeColors = p.theme.colors;

    if (color === "default") return themeColors.cardBackground;

    if (themeColors.hasOwnProperty(color))
      return themeColors[color as keyof typeof themeColors];

    return color;
  }};
`;

export const PlusIconWrapper = styled("span")`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  margin-left: ${(p) => p.theme.space[3]};
`;
