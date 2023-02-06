import CartCard from "components/CartCard";

import { useDispatch, useSelector } from "react-redux";
import { cartSelector } from "redux/cart/selectors";
import { updateCart } from "redux/cart/slice";
import { RootState } from "redux/store";
import { CartListItem, CartListStyled } from "./Cart.styled";

const CartList = () => {
  const cart = useSelector(cartSelector);
  const dispatch = useDispatch();

  const cardValueChangeHandler = (id: string, value: number) => {
    dispatch(
      updateCart(
        cart.map((item) =>
          item.id !== id ? item : { ...item, value: value.toString() }
        )
      )
    );
  };

  const onRemoveCardHandler = (id: string) => {
    dispatch(updateCart(cart.filter((item) => item.id !== id)));
  };

  console.log(cart);
  return (
    <CartListStyled>
      {cart.map(
        ({
          id,
          name,
          value,
          increaseVolume,
          unit,
          price,
          currency,
          imgPath,
        }) => (
          <CartListItem key={id}>
            <CartCard
              id={id}
              currency={currency}
              initialVolume={Number(value)}
              counterStep={Number(increaseVolume)}
              imageDimensions={{ width: 61, height: 61 }}
              imageUrl={imgPath}
              measure={unit}
              price={Number(price).toFixed(2)}
              title={name}
              shareValue={cardValueChangeHandler}
              onRemoveCard={onRemoveCardHandler}
            />
          </CartListItem>
        )
      )}
    </CartListStyled>
  );
};

export default CartList;
