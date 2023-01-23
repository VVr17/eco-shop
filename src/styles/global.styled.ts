import { theme } from "constants/theme";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${(p) => p.theme.fontFamily};
    color: ${(p) => p.theme.colors.mainText}; 
    background-color: ${(p) => p.theme.colors.mainBackground};

    &::-webkit-scrollbar {
      width: 4px;
      background-color: ${(p) => p.theme.colors.input};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${(p) => p.theme.colors.mainText};
      border-radius: 2px;
    }

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

h2 {
  font-size: ${({ theme }) => theme.fontSizes.l};
  line-height: 1.21;
  letter-spacing: 0.02em;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  /* margin-bottom:  ${({ theme }) => theme.space[3]}; */
  margin-bottom: 24px;
  
  ${theme.mq.tablet} {
    font-size: ${({ theme }) => theme.fontSizes.xl};
      margin-bottom:  ${({ theme }) => theme.space[4]};
  }
  
  ${theme.mq.desktop} {
      font-size: ${({ theme }) => theme.fontSizes.xxl};
  }
}

h3 {
  font-size: ${({ theme }) => theme.fontSizes.l};
  line-height: 1.33;
  letter-spacing: 0.02em;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  
  ${theme.mq.tablet} {
    font-size: ${({ theme }) => theme.fontSizes.l};
  }
  
    ${theme.mq.desktop} {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
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
