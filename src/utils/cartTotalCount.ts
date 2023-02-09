import { ICartCardData } from "types/types";

export const countSubtotal = (cart: ICartCardData[]) => {
  return cart.reduce(
    (acc, { value, price }) => acc + Number(value) * Number(price),
    0
  );
};
