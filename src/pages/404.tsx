import Box from "components/Box";
import Container from "components/Container";
import Head from "next/head";

const Error = () => {
  return (
    <>
      <Head>
        <title>Error</title>
        <meta name="description" content="eco shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Box as="section" py={[3, 3, 4, 4]}>
        <Container>Error</Container>
      </Box>
    </>
  );
};

export default Error;
