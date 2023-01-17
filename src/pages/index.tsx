import Container from "components/Container";
import Heading from "components/Heading";
import QueryLine from "components/QueryLine";
import Section from "components/Section";
import Head from "next/head";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  console.log("router.asPath", router.asPath);

  return (
    <>
      <Head>
        <title>Eco Shop</title>
        <meta name="description" content="eco shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Section>
        <QueryLine message={router.asPath} />
        <Heading tag="h2" text="Home" />
      </Section>
    </>
  );
};

export default Home;
