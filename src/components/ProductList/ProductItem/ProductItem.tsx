import Box from "components/Box";
import Button from "components/UIkit/Button";
import { AiOutlinePlus } from "react-icons/ai";
import {
  Card,
  ImageWrapper,
  PreviousPrice,
  Price,
  Rating,
  Title,
  Weight,
} from "./ProductItem.styled";
import Image from "next/image";
import ProductItemLabel from "./ProductItemLabel";
import { useWindowSize } from "hooks/useWindowSize";
import { ImStarFull } from "react-icons/im";
import { useDispatch } from "react-redux";
import { addToCart, updateCartItem } from "redux/cart/slice";
import { useSelector } from "react-redux";
import { cartSelector } from "redux/cart/selectors";

interface IProps {
  isSale?: boolean;
  id: string;
  name: string;
  price: string;
  oldPrice: string;
  imageUrl: string;
  rating: string;
  currency: string;
  measure: string;
  baseMeasure: string;
}

const ProductItem: React.FC<IProps> = ({
  isSale = false,
  id,
  name,
  price,
  oldPrice,
  imageUrl,
  rating,
  currency,
  measure,
  baseMeasure,
}) => {
  const { isTablet, isDesktop } = useWindowSize();
  const dispatch = useDispatch();
  const cart = useSelector(cartSelector);

  const handleAddClick = () => {
    const productInCart = cart.find(({ id: idInCart }) => idInCart === id);

    if (productInCart) {
      const newValue = +productInCart.value + +productInCart.increaseVolume;
      dispatch(updateCartItem({ id, value: newValue }));
      return;
    }

    const data = {
      id,
      name,
      value: baseMeasure,
      increaseVolume: baseMeasure,
      unit: measure,
      price,
      currency,
      imgPath: imageUrl,
    };

    dispatch(addToCart(data));
  };

  return (
    <Card>
      {isSale && <ProductItemLabel />}
      <ImageWrapper>
        <Image
          src={imageUrl}
          alt={name}
          width={72}
          height={72}
          style={{ width: "auto", height: "auto" }} // done for solve warnings in console
        />
      </ImageWrapper>
      <Rating>
        <ImStarFull />
        <p>{rating}/5</p>
      </Rating>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        flex="1"
      >
        <Title>{name}</Title>

        <Box display="flex" justifyContent="space-between" alignItems="center">
          {isTablet || isDesktop ? (
            <Button
              text="Add"
              iconRight={AiOutlinePlus}
              iconMargin="16px"
              borderColor="input"
              hoverColor="accent"
              onClick={handleAddClick}
            />
          ) : (
            <Button
              text=""
              iconRight={AiOutlinePlus}
              iconMargin="0"
              borderColor="input"
              hoverColor="accent"
              iconSize="20px"
              pb="10px"
              pt="10px"
              pl="14px"
              pr="14px"
              onClick={handleAddClick}
            />
          )}

          <Box textAlign="end">
            <Box display="flex" flexDirection="column" alignItems="end">
              {isSale && (
                <PreviousPrice>
                  {currency} {oldPrice}
                </PreviousPrice>
              )}

              <Price isSale={isSale}>
                {currency} {price}
              </Price>
            </Box>
            <Weight>
              / {baseMeasure}
              {measure}
            </Weight>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default ProductItem;

/**
 * const ProductItem: React.FC<IProps> = ({
  isSale = false,
  id,
  name,
  price,
  oldPrice,
  imageUrl,
  rating,
  currency,
  measure,
  baseMeasure,
}) => {
  const { isTablet, isDesktop } = useWindowSize();

  return (
    <Card>
      {isSale && <ProductItemLabel />}
      <ImageWrapper>
        <Image src={imageUrl} alt={name} width={72} height={72} />
      </ImageWrapper>
      <Rating>
        <AiFillStar />
        <p>{rating}/5</p>
      </Rating>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        flex="1"
      >
        <Title>{name}</Title>

        <Box display="flex" justifyContent="space-between" alignItems="center">
          {(isTablet || isDesktop) && (
            <Button
              text="Add"
              iconRight={AiOutlinePlus}
              iconMargin="16px"
              borderColor="input"
              hoverColor="accent"
            />
          )}
          <Box textAlign={["left", "left", "end", "end"]}>
            <Box
              display={["flex"]}
              flexDirection={["row-reverse", "row-reverse", "column", "column"]}
              alignItems={["center", "center", "end", "end"]}
            >
              {isSale && (
                <PreviousPrice>
                  {currency} {oldPrice}
                </PreviousPrice>
              )}

              <Price isSale={isSale}>
                {currency} {price}
              </Price>
            </Box>
            <Weight>
              / {baseMeasure}
              {measure}
            </Weight>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default ProductItem;
 */
