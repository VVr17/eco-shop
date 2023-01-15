import Box from "components/Box";
import Container from "components/Container";
import Heading from "components/Heading";
import ProductList from "components/ProductList";
import Section from "components/Section";
import PriceRange from "components/UIkit/PriceRange";
import { theme } from "constants/theme";
import Head from "next/head";

const Products = () => (
  <>
    <Head>
      <title>Products</title>
      <meta name="description" content="eco shop" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Section>
      <Box display={["block", "block", "block", "flex"]}>
        <Box
          display={["none", "none", "none", "block"]}
          as="aside"
          backgroundColor="pink"
          width={270}
          mr={theme.space[5]}
        >
          Filter
          <PriceRange
            currency="$"
            initialMinPriceRange={4}
            initialMaxPriceRange={10}
            minPrice={0}
            maxPrice={50}
            step={1}
          />
        </Box>
        <Box flex={1}>
          <Heading tag="h2" text="Products" />
          <ProductList />
        </Box>
      </Box>
    </Section>
  </>
);

export default Products;
