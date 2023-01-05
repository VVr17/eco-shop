import styled from "styled-components";
import { IBaseProps } from "./Button";

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

export const StyledButton = styled("button")<IBaseProps>`
  margin: 0;
  padding: 0;
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  width: ${(p) => (p.width === "auto" ? "auto" : p.width)};
  height: ${(p) => (p.height === "auto" ? "auto" : p.height)};

  padding-top: ${({ pt }) => (pt === "default" ? "12px" : pt)};
  padding-right: ${({ pr }) => (pr === "default" ? "16px" : pr)};
  padding-bottom: ${({ pb }) => (pb === "default" ? "12px" : pb)};
  padding-left: ${({ pl }) => (pl === "default" ? "16px" : pl)};

  font-family: ${(p) => p.theme.fontFamily};
  font-weight: ${(p) => p.theme.fontWeight.normal};
  font-size: ${(p) => (p.fontSize === "default" ? "15px" : p.fontSize)};
  line-height: 1.33;

  border-width: 1px;
  border-style: ${(p) => (p.borderColor === "default" ? "none" : "solid")};
  border-color: ${(p) =>
    getColor(p.borderColor as string, p.theme.colors, p.theme.colors.input)};
  border-radius: ${(p) =>
    p.borderRadius === "default" ? "10px" : p.borderRadius};

  color: ${(p) =>
    getColor(p.color as string, p.theme.colors, p.theme.colors.mainText)};
  background-color: ${(p) =>
    getColor(
      p.backgroundColor as string,
      p.theme.colors,
      p.theme.colors.cardBackground
    )};

  position: relative;
  overflow: hidden;
  &:hover ${ButtonBackdrop} {
    border-radius: ${(p) =>
      p.borderRadius === "default" ? "10px" : p.borderRadius};
    opacity: 0.15;
  }
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

function getColor(userColor: string, themeColors: {}, defaultColor: string) {
  if (userColor === "default") return defaultColor;
  if (themeColors.hasOwnProperty(userColor))
    return themeColors[userColor as keyof typeof themeColors];
  return userColor;
}

/*
fontSize
fontWeight
lineHeight


paddings spacings

*/
