import CartCard from "components/CartCard";
import { FC } from "react";
import { ICartCardData } from "types/types";
import { CartListItem, CartListStyled } from "./Cart.styled";

interface ICartListProps {
  data: ICartCardData[];
}

const CartList: FC<ICartListProps> = ({ data }) => {
  return (
    <CartListStyled>
      {data.map(
        ({
          id,
          name,
          initialVolume,
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
              initialVolume={Number(initialVolume)}
              counterStep={Number(increaseVolume)}
              imageDimensions={{ width: 61, height: 61 }}
              imageUrl={imgPath}
              measure={unit}
              price={Number(price).toFixed(2)}
              title={name}
            />
          </CartListItem>
        )
      )}
    </CartListStyled>
  );
};

export default CartList;
