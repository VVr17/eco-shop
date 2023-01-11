import Container from "components/Container";
import Heading from "components/Heading";
import Section from "components/Section";
import Head from "next/head";

const Products = () => (
  <>
    <Head>
      <title>Products</title>
      <meta name="description" content="eco shop" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Section>
      <Heading tag="h2" text="Products" />
    </Section>
  </>
);

export default Products;
