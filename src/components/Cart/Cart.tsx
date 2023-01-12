import Box from "components/Box";
import CartCard from "components/CartCard";
import Button from "components/UIkit/Button";
import { cartData } from "utils/fakeData/fakeCartData";

const Cart = () => {
  return (
    <>
      <Box as="h2" fontSize="s" lineHeight="1.375">
        My shopping cart:
      </Box>
      <Box as="ul">
        {cartData.map(
          ({ id, name, volume, unit, price, currency, imgPath }) => (
            <CartCard
              key={imgPath}
              id={id}
              currency={currency}
              initialVolume={Number(volume)}
              imageDimensions={{ width: 61, height: 61 }}
              imageUrl={imgPath}
              measure={unit}
              price={Number(price)}
              title={name}
            />
          )
        )}
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mt="24px"
      >
        <Box as="p" fontSize="18px" lineHeight="1.22" fontWeight="bold">
          Subtotal:
        </Box>
        <Box as="p" fontSize="18px" lineHeight="1.22" fontWeight="bold">
          $72.00
        </Box>
      </Box>
      <Button
        text="To checkout"
        backgroundColor="accent"
        width="100%"
        color="lightText"
        mt="24px"
      />
    </>
  );
};

export default Cart;
