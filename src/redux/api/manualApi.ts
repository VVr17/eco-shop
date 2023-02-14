import { createApi } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
import { TAGS_TYPES, CATEGORY_URL, MEASURE_URL } from "constants/api";
import baseQuery from "redux/baseQuery";
import { ICategory, IMeasure } from "types/manual";

export const manualApi = createApi({
  reducerPath: "manualApi",
  baseQuery,
  tagTypes: [TAGS_TYPES.categories, TAGS_TYPES.measure],
  // keepUnusedDataFor: 30000,
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getCategories: builder.query<ICategory[], void>({
      query() {
        return {
          url: `${CATEGORY_URL}`,
        };
      },
      providesTags: [TAGS_TYPES.categories],
    }),
    getMeasure: builder.query<IMeasure, void>({
      query() {
        return {
          url: `${MEASURE_URL}`,
        };
      },
      providesTags: [TAGS_TYPES.measure],
    }),
  }),
});

// Export hooks for usage in functional components
export const {
  useGetCategoriesQuery,
  useGetMeasureQuery,
  util: { getRunningQueriesThunk },
} = manualApi;

// export endpoints for use in SSR
export const { getCategories, getMeasure } = manualApi.endpoints;
