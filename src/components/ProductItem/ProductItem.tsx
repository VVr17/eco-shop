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

interface IProps {
  isSale?: boolean;
}
const ProductItem = ({ isSale = false }) => {
  const { isDesktop } = useWindowSize();

  return (
    <Card>
      {isSale && <ProductItemLabel />}
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
          {isDesktop && (
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
              {isSale && <PreviousPrice>$ 25.00</PreviousPrice>}

              <Price isSale={isSale}>$ 25.00</Price>
            </Box>
            <Weight>/ 500g</Weight>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default ProductItem;
