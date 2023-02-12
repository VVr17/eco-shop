import HomePageContainer from "components/HomePageContainer";
import ProductItem from "components/ProductList/ProductItem";
import { FC, useState } from "react";
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

const STEPS = [175, 288, 288]; // mobile, tablet, desktop
// const cardsPerViewNumber = 4;
const CARDS = [2, 2, 4]; // mobile, tablet, desktop

interface IProductSliderProps {
  title: string;
}

const ProductSlider: FC<IProductSliderProps> = ({ title }) => {
  const [position, setPosition] = useState([0, 0, 0]);

  // const tempData = discountedList[0];

  const moveLeft = () => {
    setPosition((prevPosition) =>
      prevPosition.map((pos, i) => (pos + STEPS[i] > 0 ? pos : pos + STEPS[i]))
    );
  };

  const moveRight = () => {
    const itemsNum = discountedList.length;
    setPosition((prevPosition) =>
      prevPosition.map((pos, i) =>
        pos - STEPS[i] < (CARDS[i] - itemsNum) * STEPS[i] ? pos : pos - STEPS[i]
      )
    );
  };

  // console.log(position);
  return (
    <HomePageContainer>
      <h2>{title}</h2>
      <SliderWrapper>
        <BackwardIconWrapper onClick={moveLeft}>
          <MdArrowBackIos viewBox="0 0 16 24" />
        </BackwardIconWrapper>
        <SliderContainer position={position} steps={STEPS}>
          {discountedList.map(
            ({
              currency,
              id,
              imgPath,
              name,
              oldPrice,
              onSale,
              price,
              rating,
              increaseVolume,
              measure,
            }) => (
              <ProdCard key={id}>
                <ProductItem
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
                />
              </ProdCard>
            )
          )}
        </SliderContainer>
        <ForwardIconWrapper onClick={moveRight}>
          <MdArrowForwardIos />
        </ForwardIconWrapper>
        <SliderBackdrop />
      </SliderWrapper>
    </HomePageContainer>
  );
};

export default ProductSlider;
