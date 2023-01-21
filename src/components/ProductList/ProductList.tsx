import Link from "next/link";
import { useRouter } from "next/router";
import { listsData } from "utils/fakeData/fakeListData";
import ProductItem from "./ProductItem";
import { List } from "./ProductList.styled";

// import Link from "next/link";
//  <Link
//    className={pathname === path ? styles.active : null}
//    key={id}
//    href={path}
//  >
//    <p>{title}</p>
// </Link>;
// const { pathname } = useRouter();
/**
 *  <Link href={`/contacts/${id}`}>
                <strong>{name}</strong> ({email})
              </Link>
 */

const ProductList = () => {
  const router = useRouter();
  // console.log("router", router.asPath);

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
          <li key={id} onClick={() => router.push(`${router.asPath}/${id}`)}>
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
