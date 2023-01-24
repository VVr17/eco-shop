import Link from "next/link";
import { useRouter } from "next/router";
import { MouseEvent, MouseEventHandler } from "react";
import { IProduct } from "types/product";
import ProductItem from "./ProductItem";
import { List } from "./ProductList.styled";

interface IProps {
  products: IProduct[];
}

const ProductList: React.FC<IProps> = ({ products }) => {
  const router = useRouter();
  // console.log("router", router.asPath);

  const handleClick = (
    event: MouseEvent<HTMLLIElement, globalThis.MouseEvent>,
    id: string
  ) => {
    const target = event.target as Element;
    if (target.nodeName === "BUTTON") return;

    router.push(`${router.asPath}/${id}`);
  };

  return (
    <List>
      {products.map(
        ({
          currency,
          id,
          imgPath,
          name,
          oldPrice,
          onSale,
          price,
          rating,
          increaseVolume,
          measure,
        }) => (
          <li
            key={id}
            onClick={(event) => {
              handleClick(event, id);
            }}
          >
            <ProductItem
              isSale={onSale}
              price={Number(price).toFixed(2)}
              oldPrice={Number(oldPrice).toFixed(2)}
              currency={currency}
              rating={rating}
              name={name}
              id={id}
              imageUrl={imgPath}
              measure={measure}
              baseMeasure={increaseVolume}
            />
          </li>
        )
      )}
    </List>
  );
};

export default ProductList;
