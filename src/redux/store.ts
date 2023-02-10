import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { cartPersistedReducer } from "./cart/slice";
import { filterReducer } from "./filter/filterSlice";
import { userApi, manualApi } from "./api";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [manualApi.reducerPath]: manualApi.reducer,
    cart: cartPersistedReducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(userApi.middleware, manualApi.middleware),
});

const makeStore = () => store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const wrapper = createWrapper(makeStore);
export const persistor = persistStore(store);
