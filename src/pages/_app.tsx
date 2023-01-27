import { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import { store } from "redux/store";
import Layout from "../components/Layout/Layout";
import { ThemeProvider } from "styled-components";
import { theme } from "../constants/theme";
import { GlobalStyle } from "../styles/global.styled";
import { Roboto } from "@next/font/google";
import "rc-slider/assets/index.css";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <style jsx global>{`
      html {
        font-family: ${roboto.style.fontFamily};
      }
    `}</style>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Layout>
          <main>
            <Component {...pageProps} />
          </main>
        </Layout>
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  </>
);

export default MyApp;
