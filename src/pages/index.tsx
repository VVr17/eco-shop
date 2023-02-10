import Heading from "components/Heading";
import Section from "components/Section";
import Head from "next/head";
import { useRouter } from "next/router";
import Breadcrumb from "components/UIkit/Breadcrumb";
import { wrapper } from "redux/store";
import {
  getCategories,
  getMeasure,
  getRunningQueriesThunk,
} from "redux/api/manualApi";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    // const name = context.params?.name;
    store.dispatch(getCategories.initiate());
    store.dispatch(getMeasure.initiate());

    await Promise.all(store.dispatch(getRunningQueriesThunk()));

    return {
      props: {},
    };
  }
);

const Home = () => {
  const router = useRouter();
  // console.log("router.asPath", router.asPath);

  return (
    <>
      <Head>
        <title>Eco Shop</title>
        <meta name="description" content="eco shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Section>
        <Breadcrumb />
        <Heading tag="h2" text="Home" />
      </Section>
    </>
  );
};

export default Home;
