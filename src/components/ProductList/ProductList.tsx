import { listsData } from "utils/fakeData/fakeListData";
import ProductItem from "./ProductItem";
import { List } from "./ProductList.styled";

const ProductList = () => {
  return (
    <List>
      {listsData.map(
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
          <li key={id}>
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
