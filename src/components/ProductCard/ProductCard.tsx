import Button from "components/UIkit/Button";
import {
  Card,
  ImageWrapper,
  PreviousPrice,
  Price,
  Rating,
  Title,
  Weight,
} from "./ProductCard.styled";
import { AiOutlinePlus, AiFillStar } from "react-icons/ai";
import Box from "components/Box";
import ProductCardLabel from "./ProductCardLabel";

interface IProps {
  onSale?: boolean;
}
const ProductCard = ({ onSale = false }) => {
  return (
    <Card>
      {onSale && <ProductCardLabel />}
      <ImageWrapper></ImageWrapper>
      <Rating>
        <AiFillStar />
        <p>5/5</p>
      </Rating>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        flex="1"
      >
        <Title>Seedless Prune</Title>

        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Button
            text="Add"
            iconRight={AiOutlinePlus}
            iconMargin="16px"
            borderColor="input"
            hoverColor="accent"
          />
          <Box textAlign="end">
            {onSale && <PreviousPrice>$ 25.00</PreviousPrice>}

            <Price onSale={onSale}>$ 25.00</Price>
            <Weight>/ 500g</Weight>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default ProductCard;
