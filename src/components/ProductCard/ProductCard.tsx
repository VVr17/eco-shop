import Button from "components/UIkit/Button";
import { Card, ImageWrapper, Title } from "./ProductCard.styled";
// import fallback from "assets/images/fallback.png";
// const fallback = require("../../assets/images/fallback.png");

const ProductCard = () => {
  return (
    <Card>
      <ImageWrapper></ImageWrapper>
      <Title>Seedless Prune </Title>
      {/* <Button /> */}
    </Card>
  );
};

export default ProductCard;
