import Head from "next/head";
import ButtonExamples from "../components/UIkit/Button/ButtonExamples";
import Checkbox from "components/UIkit/Checkbox";
import Box from "components/Box";
import CartCard from "components/CartCard";
import SearchExamples from "components/UIkit/Search/SearchExamples";
import FieldExamples from "components/UIkit/Field/FieldExamples";
import { useState } from "react";
import SubscribeInputExamples from "components/UIkit/SubscribeInput/SubscribeInputExamples";
import SelectExamples from "components/UIkit/Select/SelectExamples";
import ProductItem from "components/ProductItem";
import ModalExamples from "components/UIkit/Modal/ModalExamples";
import Section from "components/Section";
import Cart from "components/Cart";

const Test = () => {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <Head>
        <title>Eco Shop</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Section>
        <Cart />
        {/* <ModalExamples />
        <SelectExamples />
        <SubscribeInputExamples />
        <FieldExamples />
        <SearchExamples />
        <ButtonExamples /> */}
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          padding="20px"
          gridGap="40px"
        >
          {/* <ProductItem /> */}
          {/* <ProductItem isSale={true} /> */}
          {/* <CartCard
            id={"123"}
            initialVolume={2.5}
            measure="kg"
            counterStep={0.5}
            title="Seedless Prune"
            imageUrl=""
            imageDimensions={{ width: 64, height: 64 }}
            currency="$"
            price={42.6}
          /> */}
        </Box>
        <Box padding="20px">
          {/* <Checkbox
        <SelectExamples />
        <SubscribeInputExamples />
        <FieldExamples />
        <SearchExamples />
        <ButtonExamples />
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          padding="20px"
          gridGap="40px"
        >
          {/* <ProductItem /> */}
          {/* <ProductItem isSale={true} /> */}
          {/* <CartCard /> */}
        </Box>
        <Box padding="20px">
          {/* <Checkbox
            checked={checked}
            onChange={() => {
              setChecked((prev) => !prev);
            }}
          />
          <Checkbox
            checked={checked}
            label="checkbox with label"
            onChange={() => {
              setChecked((prev) => !prev);
            }}
          /> */}
        </Box>
      </Section>
    </>
  );
};

export default Test;
