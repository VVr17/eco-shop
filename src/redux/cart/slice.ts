import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { cartData } from "utils/fakeData/fakeCartData";
import { ICartCardData } from "types/types";

const initialState = { data: cartData };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateCart: (state, action) => {
      console.log("payload", action.payload);
      //   state.data = action.payload;
      state = action.payload;
    },
  },
});

export const { updateCart } = cartSlice.actions;
export default cartSlice;
