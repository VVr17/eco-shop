import CartCard from "components/CartCard";
import { FC, useState } from "react";
import { ICartCardData } from "types/types";
import { CartListItem, CartListStyled } from "./Cart.styled";

interface ICartListProps {
  data: ICartCardData[];
}

const CartList: FC<ICartListProps> = ({ data }) => {
  const [cart, setCart] = useState(data);

  const cardValueChangeHandler = (id: string, value: number) => {
    // console.log("id", id);
    // console.log("value", value);
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id !== id ? item : { ...item, value: value.toString() }
      )
    );
  };

  const onRemoveCardHandler = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
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
