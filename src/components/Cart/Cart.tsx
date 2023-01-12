import Box from "components/Box";
import Button from "components/UIkit/Button";

const Cart = () => {
  return (
    <>
      <Box as="h2" fontSize="s" lineHeight="1.375">
        My shopping cart:
      </Box>
      <Box as="ul"></Box>
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
