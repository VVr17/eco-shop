import Box from "components/Box";
import Container from "components/Container";
import Heading from "components/Heading";
import Section from "components/Section";
import Head from "next/head";

const Checkout = () => (
  <>
    <Head>
      <title>Checkout</title>
      <meta name="description" content="eco shop" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Section>
      <Container>
        <Box>Homepage/Checkout</Box>
      </Container>
    </Section>
    <Section>
      <Heading tag="h2" text="Checkout" />
    </Section>
  </>
);
export default Checkout;
