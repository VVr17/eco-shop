import { listsData } from "utils/fakeData/fakeListData";
import ProductItem from "./ProductItem";
import { List } from "./ProductList.styled";

const ProductList = () => {
  return (
    <List>
      {listsData.map((product) => {
        // console.log("product", product);
        const { currency, id, imgPath, name, oldPrice, onSale, price, rating } =
          product;

        return (
          <li key={id}>
            <ProductItem
              isSale={onSale}
              price={Number(price).toFixed(2)}
              oldPrice={Number(price).toFixed(2)}
              currency={currency}
              rating={rating}
              name={name}
              id={id}
              imageUrl={imgPath}
            />
          </li>
        );
      })}
    </List>
  );
};

export default ProductList;
