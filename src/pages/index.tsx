import Heading from "components/Heading";
import Section from "components/Section";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import { catalog } from "utils/fakeData/fakeListData";
import Breadcrumb from "components/UIkit/Breadcrumb";
import BannerBlock from "components/BannerBlock";
import ProductSlider from "components/ProductSlider/ProductSlider";
import WhatToCook from "components/WhatToCook/WhatToCook";
import BonusProgram from "components/BonusProgram";
import HowWeWork from "components/HowWeWork/HowWeWork";

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

      {/* <Section>
        <Breadcrumb />
        <Heading tag="h2" text="Home" />
      </Section> */}
      <BannerBlock />
      <ProductSlider title="Discounted goods" />
      <WhatToCook />
      <BonusProgram />
      <ProductSlider title="New additions" />
      <HowWeWork />
    </>
  );
};

export default Home;
