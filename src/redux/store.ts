import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./api/userApi";
import { filterReducer } from "./filter/filterSlice";
import cartSlice from "./cart/slice";

export const store = configureStore({
  reducer: {
    [cartSlice.name]: cartSlice.reducer,
    [userApi.reducerPath]: userApi.reducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
