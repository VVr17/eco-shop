import Box from "components/Box";
import Button from "components/UIkit/Button";
import CartList from "./CartList";
import { useRouter } from "next/router";
import { FC } from "react";
import { CartListWrapper, CartBody } from "./Cart.styled";
import { countSubtotal } from "utils/cartTotalCount";
import { useSelector } from "react-redux";
import { cartSelector } from "redux/cart/selectors";

interface IcartProps {
  onModalClose?: () => void;
}

const Cart: FC<IcartProps> = ({ onModalClose }) => {
  const router = useRouter();
  const cart = useSelector(cartSelector);

  const onCheckoutButtonClick = () => {
    onModalClose && onModalClose();
    router.push("/checkout");
  };

  return (
    <CartBody>
      <Box as="h2" fontSize="s" lineHeight="1.375">
        My shopping cart:
      </Box>
      {cart.length > 0 ? (
        <>
          <CartListWrapper>
            <CartList />
          </CartListWrapper>
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
              {`$${countSubtotal(cart)}`}
            </Box>
          </Box>
          <Button
            text="To checkout"
            backgroundColor="accent"
            width="100%"
            color="lightText"
            mt="24px"
            hoverColor="hoverAccent"
            onClick={onCheckoutButtonClick}
          />
        </>
      ) : (
        <p style={{ fontStyle: "italic" }}>Cart is empty</p>
      )}
    </CartBody>
  );
};

export default Cart;
