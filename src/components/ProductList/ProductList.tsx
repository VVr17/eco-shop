import { cartData } from "utils/fakeData/fakeCartData";
import ProductItem from "./ProductItem";
import { List } from "./ProductList.styled";

const ProductList = () => {
  return (
    <List>
      {cartData.map((product) => (
        <li>
          <ProductItem />
        </li>
      ))}
    </List>
  );
};

export default ProductList;
