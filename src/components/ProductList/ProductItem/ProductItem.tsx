import Button from "components/UIkit/Button";
import {
  Card,
  ImageWrapper,
  PreviousPrice,
  Price,
  Rating,
  Title,
  Weight,
} from "./ProductItem.styled";
import { AiOutlinePlus, AiFillStar } from "react-icons/ai";
import Box from "components/Box";
import { useWindowSize } from "hooks/useWindowSize";
import ProductItemLabel from "./ProductItemLabel";
import Image from "next/image";

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
              onClick={(event) => {
                event.stopPropagation();
                // console.log(event);
              }}
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
