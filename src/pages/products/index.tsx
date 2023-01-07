import Box from "components/Box";
import Container from "components/Container";
import Head from "next/head";

const Products = () => (
  <>
    <Head>
      <title>Products</title>
      <meta name="description" content="eco shop" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Box as="section" py={[3, 3, 4, 4]}>
      <Container>Products</Container>
    </Box>
  </>
);

export default Products;
