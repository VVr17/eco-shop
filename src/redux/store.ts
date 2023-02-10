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

export const makeStore = () =>
  configureStore({
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

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });
export const persistor = persistStore(makeStore());

//! without next - rtk wrapper

// export const store = configureStore({
//   reducer: {
//     [userApi.reducerPath]: userApi.reducer,
//     [manualApi.reducerPath]: manualApi.reducer,
//     cart: cartPersistedReducer,
//     filter: filterReducer,
//   },
// middleware: (getDefaultMiddleware) =>
//   getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }).concat(userApi.middleware, manualApi.middleware),
// });

// // Infer the `RootState` and `AppDispatch` types from the store itself
// // export type AppStore = ReturnType<typeof store>;
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// export const persistor = persistStore(store);
