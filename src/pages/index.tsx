import Head from "next/head";

import BannerBlock from "components/BannerBlock";
import WhatToCook from "components/WhatToCook/WhatToCook";
import BonusProgram from "components/BonusProgram";
import HowWeWork from "components/HowWeWork/HowWeWork";
import DiscountedGoods from "components/DiscountedGoods";
import NewAdditions from "components/NewAdditions";

import { useRouter } from "next/router";
import { wrapper } from "redux/store";
import { getCategories, getRunningQueriesThunk } from "redux/api/manualApi";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    store.dispatch(getCategories.initiate());
    await Promise.all(store.dispatch(getRunningQueriesThunk()));

    return {
      props: {},
    };
  }
);

const Home = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Eco Shop</title>
        <meta name="description" content="eco shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <BannerBlock />

      <DiscountedGoods />

      <WhatToCook />

      <BonusProgram />

      <NewAdditions />

      <HowWeWork />
    </>
  );
};

export default Home;
