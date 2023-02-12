import Box from "components/Box";
import Heading from "components/Heading";
import ProductList from "components/ProductList";
import Section from "components/Section";
import { theme } from "constants/theme";
import Head from "next/head";
import Filter from "components/Filter";
import SortedFilter from "components/Filter/SortedFilter";
import { FiRefreshCw } from "react-icons/fi";
import Button from "components/UIkit/Button";
import { GetServerSideProps } from "next";
import { listsData, catalog } from "utils/fakeData/fakeListData";
import Breadcrumb from "components/UIkit/Breadcrumb";
import { IProduct } from "types/product";
import { homePageRoute } from "constants/constants";
import { wrapper } from "redux/store";
import { getCategories, getMeasure } from "redux/api/manualApi";
import {
  getProducts,
  getRunningQueriesThunk,
  useGetProductsQuery,
} from "redux/api/productsApi";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const { res } = context; // response
    const productCatalogId = context.params?.productCatalogId as string;

    try {
      store.dispatch(getCategories.initiate());
      store.dispatch(getMeasure.initiate());
      store.dispatch(getProducts.initiate());

      await Promise.all(store.dispatch(getRunningQueriesThunk()));

      // throw new Error();
    } catch (error) {
      res.writeHead(302, {
        Location: "/404",
      });
      res.end();
    }

    if (productCatalogId !== "1") {
      return {
        notFound: true,
      };
    }

    const data = listsData;

    return {
      props: {
        products: data,
        catalogId: productCatalogId,
        catalogName: catalog[0].name,
      },
    };
    // return {
    //   props: {},
    // };
  }
);

interface IProps {
  products: IProduct[];
  catalogId: string;
  catalogName: string;
}

const Products: React.FC<IProps> = ({ products, catalogName, catalogId }) => {
  const { isLoading, error, data: productsFromApi } = useGetProductsQuery();
  console.log("productsFromApi", productsFromApi);

  return (
    <>
      {/* {isLoading && <p>Loading...</p>} */}
      {/* {error && <p>Error: {error}</p>} */}

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

// // return props for component
// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const productCatalogId = context.params?.productCatalogId as string;

//   // const response = await fetch(
//   //   `https://jsonplaceholder.typicode.com/users/${id}`
//   // );
//   // const data = await response.json();
//   // const ids = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
//   // console.log("ids.includes(productCatalogId)", ids.includes(productCatalogId));

//   if (productCatalogId !== "1") {
//     return {
//       notFound: true,
//     };
//   }

// if (!data) {
//   return {
//     notFound: true,
//   };
// }

//   const data = listsData;

//   return {
//     props: {
//       products: data,
//       catalogId: productCatalogId,
//       catalogName: catalog[0].name,
//     },
//   };
// };
