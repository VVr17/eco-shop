import Box from "components/Box";
import Button from "components/UIkit/Button";

const Cart = () => {
  return (
    <>
      <Box as="h2">My shopping cart:</Box>
      <Box as="ul"></Box>
      <Box as="p"></Box>
      <Button text="To checkout" backgroundColor="accent" width="100%" />
    </>
  );
};

export default Cart;
