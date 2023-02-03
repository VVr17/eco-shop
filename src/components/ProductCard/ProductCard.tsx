import Box from "components/Box";
import Heading from "components/Heading";
import { IProduct } from "types/product";
import AdditionalInfo from "./AdditionalInfo";
import CustomerReviews from "./CustomerReviews";
import Description from "./Description";
import MainInfo from "./MainInfo";
import OnSaleLabel from "./OnSaleLabel";
import PriceInfo from "./PriceInfo";
import { ImageStyled } from "./ProductCard.styled";
import StockDelivery from "./StockDelivery";

interface IProps {
  product: IProduct;
}

const ProductCard: React.FC<IProps> = ({ product }) => {
  const {
    id,
    name,
    imgPath,
    composition,
    country,
    brand,
    inStock,
    currency,
    price,
    oldPrice,
    onSale,
    initialVolume,
    increaseVolume,
    measure,
    description,
    nutritionalValue,
    vitamins,
    minerals,
    rating,
    customerReviews,
  } = product;

  return (
    <>
      <Heading tag="h2" text={name} />
      <Box position="relative">
        <ImageStyled src={imgPath} alt={name} width={311} height={212} />
        {onSale && <OnSaleLabel />}
      </Box>
      <StockDelivery inStock={inStock} />
      <MainInfo composition={composition} country={country} brand={brand} />
      <PriceInfo
        currency={currency}
        price={price}
        increaseVolume={increaseVolume}
        measure={measure}
        initialVolume={initialVolume}
        id={id}
      />
      <Description description={description} />
      <AdditionalInfo />
      <CustomerReviews customerReviews={customerReviews} rating={rating} />
    </>
  );
};

export default ProductCard;
