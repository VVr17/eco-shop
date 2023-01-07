export const breakpoints = ["375", "768", "1440"];

export const theme = {
  colors: {
    lightText: "#ffffff",
    mainText: "#383634",
    accent: "#4C7C7D",
    secondaryAccent: "#E45959", // red
    mainBackground: "#F5F3F1",
    secondaryBackground: "#E5E5E5",
    input: "#EDEAE7",
    border: "rgba(56, 54, 52, 0.3)",
    cardBackground: "#FFFFFF",
    cartBorder: "rgba(56, 54, 52, 0.08)",
    hoverHeaderLink: "rgba(76, 124, 125, 0.4)",
  },

  space: ["0", "4px", "8px", "16px", "32px", "64px", "128px", "256px", "512px"],

  fontFamily: "'Roboto', sans-serif",

  fontWeight: {
    normal: 400,
    medium: 500,
    bold: 700,
  },

  fontSizes: {
    xxs: "12px",
    xs: "14px",
    s: "16px",
    m: "20px",
    l: "24px",
    xl: "40px",
  },

  transitionTiming: "250ms cubic-bezier(0.4, 0, 0.2, 1)",

  breakpoints: [
    `${breakpoints[0]}px`,
    `${breakpoints[1]}px`,
    `${breakpoints[2]}px`,
  ],

  mq: {
    mobileOnly: `@media screen and (max-width: ${+breakpoints[1] - 0.02}px)`,
    tablet: `@media screen and (min-width: ${breakpoints[1]}px)`,
    tabletOnly: `@media screen and (min-width: ${
      breakpoints[1]
    }px) and (max-width: ${+breakpoints[2] - 0.02}px)`,
    desktop: `@media screen and (min-width: ${breakpoints[2]}px)`,
  },

  boxShadow: "0px 6px 16px -10px rgba(56, 54, 52, 0.08)",
};
