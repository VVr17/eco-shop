import HomePageContainer from "components/HomePageContainer";
import ProductItem from "components/ProductList/ProductItem";
import { FC } from "react";
import { discountedList } from "utils/fakeData/fakeDiscountedList";
import {
  BackwardIconWrapper,
  ForwardIconWrapper,
  ProdCard,
  SliderBackdrop,
  SliderContainer,
  SliderWrapper,
} from "./ProductSlider.styled";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

interface IProductSliderProps {
  title: string;
}

const ProductSlider: FC<IProductSliderProps> = ({ title }) => {
  // const tempData = discountedList[0];

  // const {
  //   currency,
  //   id,
  //   imgPath,
  //   name,
  //   oldPrice,
  //   onSale,
  //   price,
  //   rating,
  //   increaseVolume,
  //   measure,
  // } = tempData;

  return (
    <HomePageContainer>
      <SliderWrapper>
        <BackwardIconWrapper>
          <MdArrowBackIos viewBox="0 0 16 24" />
        </BackwardIconWrapper>
        <SliderContainer step={0}>
          {discountedList.map(({ id }) => (
            <ProdCard key={id}>{Number(id)}</ProdCard>
          ))}
        </SliderContainer>
        <ForwardIconWrapper>
          <MdArrowForwardIos />
        </ForwardIconWrapper>
        <SliderBackdrop />
      </SliderWrapper>

      {/* <h2>{title}</h2> */}
      {/* <ProductItem
        isSale={onSale}
        price={Number(price).toFixed(2)}
        oldPrice={Number(oldPrice).toFixed(2)}
        currency={currency}
        rating={rating}
        name={name}
        id={id}
        imageUrl={imgPath}
        measure={measure}
        baseMeasure={increaseVolume}
      /> */}
    </HomePageContainer>
  );
};

export default ProductSlider;
