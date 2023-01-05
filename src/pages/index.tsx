import Checkbox from "components/UIkit/Checkbox";
import Head from "next/head";
import { useState } from "react";
import ButtonExamples from "../components/UIkit/Button/ButtonExamples";
import ProductCard from "components/ProductCard";

const Home = () => {
  // const [checked, setChecked] = useState(false);
  return (
    <>
      <Head>
        <title>Eco Shop</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section>
        Home
        <ButtonExamples />
        {/* <Checkbox />
        <Checkbox
          label="this is label"
          checked={checked}
          onChange={() => {
            setChecked((prev) => !prev);
          }}
        /> */}
        <ProductCard />
      </section>
    </>
  );
};

export default Home;
