import { css } from "styled-components";

export const DEFAULT_STYLES_VALUE = "default";
export const NONE_STYLES_VALUE = "none";

export interface IBaseProps {
  backgroundColor?: string;
  color?: string;
  borderColor?: string;
  borderRadius?: string;
  borderStyle?: "none" | "solid";
  pl?: string | number;
  pr?: string;
  pt?: string;
  pb?: string;
  width?: string;
  height?: string;
  fontSize?: string;
  hoverColor?: string;
}

export const UI_BASE_PROPS: IBaseProps = {
  backgroundColor: "cardBackground",
  color: "mainText",
  borderColor: "input",
  borderRadius: "10px",
  borderStyle: "solid",
  pl: "16px",
  pr: "16px",
  pt: "12px",
  pb: "12px",
  width: "auto",
  height: "auto",
  fontSize: "15px",
  hoverColor: NONE_STYLES_VALUE,
};

export const getUIBaseStyles = (p: IBaseProps, theme: any) => {
  const { colors, space, fontSizes } = theme;
  const {
    backgroundColor,
    color,
    borderColor,
    borderStyle,
    borderRadius,
    pl,
    pr,
    pt,
    pb,
    fontSize,
    width,
    height,
    hoverColor,
  } = p;

  const getThemeValue = (value: string, themeObject: {}) => {
    return themeObject.hasOwnProperty(value)
      ? themeObject[value as keyof typeof themeObject]
      : value;
  };

  const getSpaceValue = (value: string | number) => {
    return typeof value === "number" && value < space.length
      ? space[value]
      : value;
  };

  const shouldHover = () => {
    if (hoverColor === NONE_STYLES_VALUE) return;

    return css`
      &:hover {
        background-color: ${getThemeValue(hoverColor as string, colors)};
      }
    `;
  };

  return css`
    width: ${width};
    height: ${height};

    font-size: ${getThemeValue(fontSize as string, fontSizes)};

    padding-left: ${getSpaceValue(pl as string | number)};
    padding-right: ${getSpaceValue(pr as string | number)};
    padding-top: ${getSpaceValue(pt as string | number)};
    padding-bottom: ${getSpaceValue(pb as string | number)};

    color: ${getThemeValue(color as string, colors)};
    background-color: ${getThemeValue(backgroundColor as string, colors)};
    border-color: ${getThemeValue(borderColor as string, colors)};

    border-style: ${borderStyle};
    border-radius: ${borderRadius};

    ${shouldHover()}
  `;
};
