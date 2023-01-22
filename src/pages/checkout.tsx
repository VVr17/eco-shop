import Box from "components/Box";
import CheckoutData from "components/CheckoutData";
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

    <Container>
      <Box as="p" pt={5} pb={3}>
        Homepage/Checkout
      </Box>
    </Container>
    <Container>
      <Heading tag="h2" text="Checkout" />
    </Container>
    <Container>
      <CheckoutData />
    </Container>
  </>
);
export default Checkout;
