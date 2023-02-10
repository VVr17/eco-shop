import Box from "components/Box";
import Counter from "components/Counter";
import { Button } from "components/UIkit";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cartSelector } from "redux/cart/selectors";
import { addToCart, updateCartItem } from "redux/cart/slice";
import { Price, PriceInfoWrapper, TotalPrice } from "./PriceInfo.styled";

interface IProps {
  currency: string;
  price: string;
  increaseVolume: string;
  measure: string;
  initialVolume: string;
  id: string;
  baseMeasure: string;
  imageUrl: string;
  name: string;
}

const PriceInfo: React.FC<IProps> = ({
  currency,
  price,
  name,
  increaseVolume,
  measure,
  initialVolume,
  id,
  baseMeasure,
  imageUrl,
}) => {
  const dispatch = useDispatch();
  const cart = useSelector(cartSelector);
  const [counterValue, setCounterValue] = useState(initialVolume);

  const handleAddClick = () => {
    const productInCart = cart.find(({ id: idInCart }) => idInCart === id);

    if (productInCart) {
      const newValue = +productInCart.value + +counterValue;
      dispatch(updateCartItem({ id, value: newValue }));
      return;
    }

    const data = {
      id,
      name,
      value: counterValue,
      increaseVolume: baseMeasure,
      unit: measure,
      price,
      currency,
      imgPath: imageUrl,
    };

    dispatch(addToCart(data));
  };

  return (
    <PriceInfoWrapper>
      <Box>
        <TotalPrice>
          Total: {currency} {price}
        </TotalPrice>

        <Price>
          {currency} {price} / {increaseVolume}
          {measure}
        </Price>
      </Box>
      <Box display="flex" flexDirection="column" gridGap={2}>
        <Counter
          shareValue={(id: string, value: number) => {
            setCounterValue(value.toString());
          }}
          id={id}
          initialValue={+initialVolume}
          measure={measure}
          step={+increaseVolume}
        />
        <Button
          text="Add to cart"
          iconRight={AiOutlinePlus}
          iconMargin="16px"
          borderColor="accent"
          backgroundColor="accent"
          color="lightText"
          hoverColor="hoverAccent"
          onClick={handleAddClick}
        />
      </Box>
    </PriceInfoWrapper>
  );
};

export default PriceInfo;
