import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "./store";
import { BASE_URL } from "constants/api";

export default fetchBaseQuery({
  // prepareHeaders: (headers, { getState }) => {
  //   const token = (getState() as RootState).auth.token;
  //   if (token) {
  //     headers.set("Authorization", `Bearer ${token}`);
  //   }
  //   return headers;
  // },
  baseUrl: BASE_URL,
});
