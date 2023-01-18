import Heading from "components/Heading";
import QueryLine from "components/QueryLine";
import Section from "components/Section";
import { splitRoute } from "helpers/splitRoute";
import Head from "next/head";
import { useRouter } from "next/router";

const ProductCard = () => {
  const router = useRouter();
  const isParsed = !router.asPath.includes("[");
  const message = splitRoute(router.asPath);

  return (
    <>
      <Head>
        <title>Product card</title>
        <meta name="description" content="eco shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Section>
        {isParsed && <QueryLine message={message} />}
        {/* <Heading tag="h2" text={message} /> */}
      </Section>
    </>
  );
};
export default ProductCard;
