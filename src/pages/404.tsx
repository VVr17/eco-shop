import Container from "components/Container";
import Head from "next/head";
import ErrorImage from "components/Error/ErrorImage";
import { Button } from "components/UIkit";
import { theme } from "constants/theme";
import ErrorText from "components/Error/ErrorText";
import Box from "components/Box";
import { useRouter } from "next/router";
import { wrapper } from "redux/store";
import { getCategories, getRunningQueriesThunk } from "redux/api/manualApi";
import { useEffect, useState } from "react";

export const getStaticProps = wrapper.getStaticProps(
  (store) => async (context) => {
    store.dispatch(getCategories.initiate());
    await Promise.all(store.dispatch(getRunningQueriesThunk()));

    return {
      props: {},
    };
  }
);

const Error = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Error</title>
        <meta name="description" content="eco shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Box as="section" py={5}>
        <Container>
          <ErrorText />
          <ErrorImage />
          <Box
            display="flex"
            flexDirection="column"
            gridGap={theme.space[2]}
            alignItems="center"
          >
            <Button
              text="Go to homepage"
              backgroundColor={theme.colors.secondaryAccent}
              color={theme.colors.lightText}
              width="150px"
              fontSize={theme.fontSizes.xs}
              onClick={() => router.push(`/`)}
              // hoverColor={theme.colors.hoverHeaderLink}
            />
            <Button
              text="Report a bug"
              backgroundColor="transparent"
              width="150px"
              fontSize={theme.fontSizes.xs}
              color={theme.colors.secondaryAccent}
              // hoverColor={theme.colors.hoverHeaderLink}
              borderColor={theme.colors.secondaryAccent}
            />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Error;
