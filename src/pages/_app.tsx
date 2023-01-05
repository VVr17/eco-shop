import { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/Layout/Layout";
import { ThemeProvider } from "styled-components";
import { theme } from "../constants/theme";
import { GlobalStyle } from "../styles/global.styled";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <ThemeProvider theme={theme}>
      <Layout>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <main>
          <Component {...pageProps} />
        </main>
      </Layout>
      <GlobalStyle />
    </ThemeProvider>
  </>
);

export default MyApp;
