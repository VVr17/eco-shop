import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { cartData } from "utils/fakeData/fakeCartData";
import { ICartCardData } from "types/types";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

interface cartState {
  data: ICartCardData[];
}

const initialState: cartState = { data: cartData };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateCartItem: (
      state,
      { payload }: PayloadAction<{ id: string; value: number }>
    ) => {
      state.data = state.data.map((item) =>
        item.id !== payload.id
          ? item
          : { ...item, value: payload.value.toString() }
      );
    },

    addToCart: (state, action: PayloadAction<ICartCardData>) => {
      state.data.push(action.payload);
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      state.data = state.data.filter((item) => item.id !== action.payload);
    },

    clearCart: (state) => {
      state.data = [];
    },
  },
});

const persistConfig = {
  key: "cart",
  storage,
};

export const cartPersistedReducer = persistReducer(
  persistConfig,
  cartSlice.reducer
);

export const { updateCartItem, addToCart, removeFromCart, clearCart } =
  cartSlice.actions;
