import Heading from "components/Heading";
import ProductCard from "components/ProductCard";
import QueryLine from "components/UIkit/Breadcrumb";
import Section from "components/Section";
import BackButton from "components/UIkit/BackButton";
import { splitRoute } from "helpers/splitRoute";
import Head from "next/head";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { productData } from "utils/fakeData/fakeProductCardData";
import { catalog } from "utils/fakeData/fakeListData";
import Breadcrumb from "components/UIkit/Breadcrumb";
import { IProduct } from "types/product";

// return props for component
export const getServerSideProps: GetServerSideProps = async (context) => {
  const productCatalogId = context.params?.productCatalogId as string;
  const productId = context.params?.productId as string;

  // const response = await fetch(
  //   `https://jsonplaceholder.typicode.com/users/${id}`
  // );
  // const data = await response.json();

  // if (!data) {
  //   return {
  //     notFound: true,
  //   };
  // }

  if (productId !== "1") {
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
};

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
  const router = useRouter();
  // const isParsed = !router.asPath.includes("[");
  // const message = splitRoute(router.asPath);

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
            { href: "/", name: "Homepage" },
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
