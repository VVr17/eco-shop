import ProductCard from "components/ProductCard";
import Section from "components/Section";
import BackButton from "components/UIkit/BackButton";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { productData } from "utils/fakeData/fakeProductCardData";
import { catalog } from "utils/fakeData/fakeListData";
import Breadcrumb from "components/UIkit/Breadcrumb";
import { IProduct } from "types/product";
import { homePageRoute } from "constants/constants";
import { wrapper } from "redux/store";
import { getCategories } from "redux/api/manualApi";
import {
  getProducts,
  getRunningQueriesThunk,
  useGetProductsQuery,
} from "redux/api/productsApi";

// return props for component

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const { res } = context; // response
    const productCatalogId = context.params?.productCatalogId as string;
    const productId = context.params?.productId as string;

    try {
      store.dispatch(getCategories.initiate());
      store.dispatch(getProducts.initiate());

      await Promise.all(store.dispatch(getRunningQueriesThunk()));

      // throw new Error();
    } catch (error) {
      res.writeHead(302, {
        Location: "/404",
      });
      res.end();
    }

    const ids = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

    if (!ids.includes(productId)) {
      return {
        notFound: true,
      };
    }

    const data = productData;

    return {
      props: {
        product: data,
        catalogId: productCatalogId,
        catalogName: catalog[0].name,
        productId,
        productName: productData.name,
      },
    };
  }
);

interface IProps {
  product: IProduct;
  catalogId: string;
  catalogName: string;
  productId: string;
  productName: string;
}

const Product: React.FC<IProps> = ({
  product,
  productId,
  productName,
  catalogId,
  catalogName,
}) => {
  const { isLoading, error, data: productsFromApi } = useGetProductsQuery();
  console.log("productsFromApiInOneCard", productsFromApi);

  return (
    <>
      <Head>
        <title>Product card</title>
        <meta name="description" content="eco shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Section>
        <Breadcrumb
          route={[
            homePageRoute,
            { href: `${catalogId}`, name: catalogName },
            { href: `${productId}`, name: productName },
          ]}
        />

        <BackButton />
        <ProductCard product={product} />
      </Section>
    </>
  );
};
export default Product;
