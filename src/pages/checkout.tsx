import Box from "components/Box";
import CheckoutData from "components/CheckoutData";
import Container from "components/Container";
import Heading from "components/Heading";
import Section from "components/Section";
import Breadcrumb from "components/UIkit/Breadcrumb";
import Head from "next/head";
import { FC } from "react";
import { getCountries } from "services/countriesApi";
import { ICountry } from "types/types";

// export async function getServerSideProps() {
//   const data = await getCountries();

//   return { props: { data } };
// }

// interface ICheckoutProps {
//   data: ICountry[];
// }

const Checkout: FC = () => {
  // console.log(data);

  return (
    <>
      <Head>
        <title>Checkout</title>
        <meta name="description" content="eco shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Section>
        <Breadcrumb />
        <Heading tag="h2" text="Checkout" />
        <CheckoutData />
      </Section>
    </>
  );
};
export default Checkout;
