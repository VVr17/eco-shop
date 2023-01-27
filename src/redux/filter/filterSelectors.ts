import type { RootState } from "redux/store";

export const selectFilter = (state: RootState) => state.filter;
