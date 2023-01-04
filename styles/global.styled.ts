import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${(p) => p.theme.fontFamily};
    color: ${(p) => p.theme.colors.mainText}; 
    background-color: ${(p) => p.theme.colors.mainBackground};
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

img {
  display: block;
  width: 100%;
  height: auto;
}

a {
  text-decoration: none;
  font-family: inherit;
  color: inherit;
}


`;
