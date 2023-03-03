import axios from "axios";
import Box from "components/Box";
import CheckoutData from "components/CheckoutData";
import Container from "components/Container";
import Heading from "components/Heading";
import Section from "components/Section";
import Breadcrumb from "components/UIkit/Breadcrumb";
import Head from "next/head";
import { FC, useEffect, useState } from "react";
import { getCountries } from "services/countriesApi";
import { ICountry } from "types/types";

export async function getServerSideProps() {
  const response = await axios.get(
    "http://localhost:3000/_next/data/development/1/2.json?productCatalogId=1&productId=2"
  );

  return { props: { data: response.data } };
}

interface ICheckoutProps {
  // data: ICountry[];
  data: { pageProps: { catalogName: string } };
}

const Checkout: FC<ICheckoutProps> = ({ data }) => {
  console.log(data);

  // const [test, setTest] = useState("");

  // useEffect(() => {
  //   const test = async () => {
  //     const response = await axios.get(
  //       "http://localhost:3000/_next/data/development/1/2.json?productCatalogId=1&productId=2"
  //     );

  //     setTest(response.data.pageProps.catalogName);
  //   };

  //   test();
  // }, []);

  return (
    <>
      <Head>
        <title>Checkout</title>
        <meta name="description" content="eco shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Section>
        <h2>{data.pageProps.catalogName}</h2>
        {/* <h2>{test}</h2> */}
        <Breadcrumb />
        <Heading tag="h2" text="Checkout" />
        <CheckoutData />
      </Section>
    </>
  );
};
export default Checkout;
