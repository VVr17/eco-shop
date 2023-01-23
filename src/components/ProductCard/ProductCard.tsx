import Box from "components/Box";
import Counter from "components/Counter";
import Heading from "components/Heading";
import Button from "components/UIkit/Button";
import { theme } from "constants/theme";
import Image from "next/image";
import { useRouter } from "next/router";
import { AiFillStar, AiOutlinePlus } from "react-icons/ai";
import { IProduct } from "types/product";
import { productData } from "utils/fakeData/fakeProductCardData";
import { ImageStyled } from "./ProductCard.styled";

interface IProps {
  product: IProduct;
}

const ProductCard: React.FC<IProps> = ({ product }) => {
  const router = useRouter();
  // console.log("router", router.query);

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
      <ImageStyled src={imgPath} alt={name} width={311} height={212} />
      <div>In stock {inStock ? "+" : "-"}</div>
      <p>Delivery: 1–3 business days</p>

      <table>
        <tbody>
          <tr>
            <th>Composition:</th>
            <td>
              <span>{composition}</span>
            </td>
          </tr>
          <tr>
            <th>Country:</th>
            <td>
              <span>{country}</span>
            </td>
          </tr>
          <tr>
            <th>Brand:</th>
            <td>
              <span>{brand}</span>
            </td>
          </tr>
        </tbody>
      </table>

      <Box
        backgroundColor={theme.colors.cardBackground}
        borderRadius={20}
        padding={4}
      >
        <p>Total: {currency} </p>
        <p>
          {currency}
          {price} /{increaseVolume}
          {measure}
        </p>
        <p>{oldPrice} old price</p>
        <Counter
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

      <div>
        <p>Description</p>
        <p>{description}</p>
      </div>

      <div>
        <p>Nutritional value: </p>
        <p>Vitamins: </p>
        <p>Minerals:</p>
      </div>

      <div>
        <p>Customer reviews</p>
        <div>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <p>{rating}/5</p>
        </div>

        <ul>
          {customerReviews.map(({ id, name, desc, date, rating }) => (
            <li key={id}>
              <p>{name}</p>
              <p>{desc}</p>
              <p>{date}</p>
              <p>{rating}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProductCard;
