import Box from "components/Box";
import Heading from "components/Heading";
import ProductList from "components/ProductList";
import Section from "components/Section";
import { theme } from "constants/theme";
import Head from "next/head";
import Filter from "components/Filter";
import { useRouter } from "next/router";
import QueryLine from "components/UIkit/Breadcrumb";
import { splitRoute } from "helpers/splitRoute";
import SortedFilter from "components/Filter/SortedFilter";
import { FiRefreshCw } from "react-icons/fi";
import Button from "components/UIkit/Button";
import { GetServerSideProps } from "next";
import { listsData, catalog } from "utils/fakeData/fakeListData";
import Breadcrumb from "components/UIkit/Breadcrumb";
import { IProduct } from "types/product";
import { homePageRoute } from "constants/constants";

// return props for component
export const getServerSideProps: GetServerSideProps = async (context) => {
  const productCatalogId = context.params?.productCatalogId as string;

  // const response = await fetch(
  //   `https://jsonplaceholder.typicode.com/users/${id}`
  // );
  // const data = await response.json();

  if (productCatalogId !== "1") {
    return {
      notFound: true,
    };
  }

  // if (!data) {
  //   return {
  //     notFound: true,
  //   };
  // }

  const data = listsData;

  return {
    props: {
      products: data,
      catalogId: productCatalogId,
      catalogName: catalog[0].name,
    },
  };
};

interface IProps {
  products: IProduct[];
  catalogId: string;
  catalogName: string;
}

const Products: React.FC<IProps> = ({ products, catalogName, catalogId }) => {
  const router = useRouter();
  // const isParsed = !router.asPath.includes("[");
  // const message = splitRoute(router.asPath);

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
            <Breadcrumb
              route={[
                homePageRoute,
                { href: `${catalogId}`, name: catalogName },
              ]}
            />
            <Heading tag="h2" text={catalogName} />
            <SortedFilter />
            <ProductList products={products} />
            <Box display="flex" width="100%" justifyContent="center">
              <Button
                width="264px"
                text="Load more"
                borderColor="border"
                backgroundColor="transparent"
                iconLeft={FiRefreshCw}
                hoverColor="accent"
              />
            </Box>
          </Box>
        </Box>
      </Section>
    </>
  );
};

export default Products;
