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
    updateCart: (state, action: PayloadAction<ICartCardData[]>) => {
      state.data = action.payload;
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

export const { updateCart } = cartSlice.actions;
