import Box from "components/Box";
import Heading from "components/Heading";
import ProductList from "components/ProductList";
import Section from "components/Section";
import { theme } from "constants/theme";
import Head from "next/head";
import Filter from "components/Filter";
import { useRouter } from "next/router";
import QueryLine from "components/QueryLine";
import { splitRoute } from "helpers/splitRoute";
import SortedFilter from "components/Filter/SortedFilter";

const Products = () => {
  const router = useRouter();
  const isParsed = !router.asPath.includes("[");
  const message = splitRoute(router.asPath);

  return (
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
            width={270}
            mr={theme.space[5]}
          >
            <Filter />
          </Box>
          <Box flex={1}>
            {isParsed && (
              <>
                <QueryLine message={message} />
                <Heading tag="h2" text={message} />
              </>
            )}
            <SortedFilter />
            <ProductList />
          </Box>
        </Box>
      </Section>
    </>
  );
};

export default Products;
