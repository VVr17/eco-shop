import CartCard from "components/CartCard";

import { useDispatch, useSelector } from "react-redux";
import { cartSelector } from "redux/cart/selectors";
import { removeFromCart, updateCartItem } from "redux/cart/slice";
import { CartListItem, CartListStyled } from "./Cart.styled";

const CartList = () => {
  const cart = useSelector(cartSelector);
  const dispatch = useDispatch();

  const cardValueChangeHandler = (id: string, value: number) => {
    dispatch(updateCartItem({ id, value }));
  };

  const onRemoveCardHandler = (id: string) => {
    dispatch(removeFromCart(id));
  };

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
