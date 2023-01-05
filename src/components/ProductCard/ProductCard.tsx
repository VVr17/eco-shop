import Button from "components/UIkit/Button";
import {
  Card,
  ImageWrapper,
  Price,
  Rating,
  Title,
  Weight,
} from "./ProductCard.styled";
import { AiOutlinePlus, AiFillStar } from "react-icons/ai";
import Box from "components/Box";
import ProductCardLabel from "./ProductCardLabel";

interface IProps {
  hasLabel?: boolean;
}
const ProductCard = ({ hasLabel = false }) => {
  return (
    <Card>
      {hasLabel && <ProductCardLabel />}
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

        <Box display="flex" justifyContent="space-between">
          <Button
            text="Add"
            iconRight={AiOutlinePlus}
            iconMargin="16px"
            borderColor="input"
            hoverColor="accent"
          />
          <Box textAlign="end">
            <Price>$ 25.00</Price>
            <Weight>/ 500g</Weight>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default ProductCard;
