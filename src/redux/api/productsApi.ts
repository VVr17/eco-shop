import { createApi } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
import { TAGS_TYPES, PRODUCT_URL } from "constants/api";
import baseQuery from "redux/baseQuery";
import { AnyMessageParams } from "yup/lib/types";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery,
  tagTypes: [TAGS_TYPES.products],
  // keepUnusedDataFor: 30000,
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getProducts: builder.query<any, void>({
      query() {
        return {
          url: `${PRODUCT_URL}`,
        };
      },
      providesTags: [TAGS_TYPES.products],
    }),
    getProductById: builder.query<any, string>({
      query(id) {
        return {
          url: `${PRODUCT_URL}/${id}`,
        };
      },
      providesTags: [TAGS_TYPES.products], // TODO: check tag
    }),
  }),
});

// Export hooks for usage in functional components
export const {
  useGetProductsQuery,
  util: { getRunningQueriesThunk },
} = productsApi;

// export endpoints for use in SSR
export const { getProducts } = productsApi.endpoints;
