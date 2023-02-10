import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store, wrapper } from "redux/store";
import Layout from "../components/Layout/Layout";
import { ThemeProvider } from "styled-components";
import { theme } from "../constants/theme";
import { GlobalStyle } from "../styles/global.styled";
import { Roboto } from "@next/font/google";
import "rc-slider/assets/index.css";

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
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
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Layout>
            <main>
              <Component {...pageProps} />
            </main>
          </Layout>
          <GlobalStyle />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </>
);

// export default MyApp;
export default wrapper.withRedux(MyApp);
