import { createApi } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
import { TAGS_TYPES } from "constants/api";
import baseQuery from "redux/baseQuery";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery,
  tagTypes: [TAGS_TYPES.user],
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({}),
});

// export const { query } = userApi;
