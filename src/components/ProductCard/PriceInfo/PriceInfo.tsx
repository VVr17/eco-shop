import Box from "components/Box";
import Counter from "components/Counter";
import { Button } from "components/UIkit";
import { AiOutlinePlus } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cartSelector } from "redux/cart/selectors";
import { Price, PriceInfoWrapper, TotalPrice } from "./PriceInfo.styled";

interface IProps {
  currency: string;
  price: string;
  increaseVolume: string;
  measure: string;
  initialVolume: string;
  id: string;
}

const PriceInfo: React.FC<IProps> = ({
  currency,
  price,
  increaseVolume,
  measure,
  initialVolume,
  id,
}) => {
  const dispatch = useDispatch();
  const cart = useSelector(cartSelector);
  // console.log("cart", cart);

  const handleAddClick = () => {
    console.log("add to cart");
    const isInCart = cart.find(({ id: idInCart }) => idInCart === id);
    console.log("isInCart", isInCart);
    // const data = {
    //   id,
    //   name,
    //   value ,
    //   increaseVolume,
    //   unit,
    //   price,
    //   currency,
    //   imgPath,
    // };
    // TODO: update Cart - item quantity, in case item is already in cart
    // if (isInCart) {
    //   data.value += 1;
    //   return;
    // }

    // dispatch(addToCart(data));
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
          // TODO:check if need share value to do smth
          shareValue={(id: string, value: number) => {}}
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
          onClick={() => {
            console.log("add to cart");
          }}
        />
      </Box>
    </PriceInfoWrapper>
  );
};

export default PriceInfo;
