import Box from "components/Box";
import Button from "components/UIkit/Button";
import CartList from "./CartList";
import { useRouter } from "next/router";

import { FC } from "react";
import { ICartCardData } from "types/types";
import { CartListWrapper, ModalBody } from "./Cart.styled";

interface ICartProps {
  data: ICartCardData[];
}

const Cart: FC<ICartProps> = ({ data }) => {
  const router = useRouter();

  const onCheckoutButtonClick = () => {
    router.push("/checkout");
  };

  return (
    <ModalBody>
      <Box as="h2" fontSize="s" lineHeight="1.375">
        My shopping cart:
      </Box>
      <CartListWrapper>
        <CartList data={data} />
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
          $72.00
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
    </ModalBody>
  );
};

export default Cart;
