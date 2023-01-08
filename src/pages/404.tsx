import Container from "components/Container";
import Section from "components/Section";
import Head from "next/head";

const Error = () => {
  return (
    <>
      <Head>
        <title>Error</title>
        <meta name="description" content="eco shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Section>
        <Container>Error</Container>
      </Section>
    </>
  );
};

export default Error;
