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
  pr?: string | number;
  pt?: string | number;
  pb?: string | number;
  ml?: string | number;
  mr?: string | number;
  mt?: string | number;
  mb?: string | number;
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
  ml: 0,
  mr: 0,
  mt: 0,
  mb: 0,
  width: "auto",
  height: "auto",
  fontSize: "16px",
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
    ml,
    mr,
    mt,
    mb,
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

    margin-left: ${getSpaceValue(ml as string | number)};
    margin-right: ${getSpaceValue(mr as string | number)};
    margin-top: ${getSpaceValue(mt as string | number)};
    margin-bottom: ${getSpaceValue(mb as string | number)};

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
