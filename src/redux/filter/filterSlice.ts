import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IPriceRange {
  min: number;
  max: number;
}

interface IFilter {
  price: IPriceRange;
  volume: string[];
  brand: string[];
  form: string[];
}

const filterInitialState: IFilter = {
  price: { min: 0, max: 0 },
  volume: [],
  brand: [],
  form: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState: filterInitialState,
  reducers: {
    setPriceFilter(state, { payload }: PayloadAction<IPriceRange>) {
      state.price = payload;
    },
    addVolumeFilter(state, { payload }: PayloadAction<string>) {
      state.volume.push(payload);
    },
    removeVolumeFilter(state, { payload }: PayloadAction<string>) {
      state.volume = state.volume.filter(
        (stateValue) => stateValue !== payload
      );
    },
    addBrandFilter(state, { payload }: PayloadAction<string>) {
      state.brand.push(payload);
    },
    removeBrandFilter(state, { payload }: PayloadAction<string>) {
      state.brand = state.brand.filter((stateValue) => stateValue !== payload);
    },
    addFormFilter(state, { payload }: PayloadAction<string>) {
      state.form.push(payload);
    },
    removeFormFilter(state, { payload }: PayloadAction<string>) {
      state.form = state.form.filter((stateValue) => stateValue !== payload);
    },
  },
});

export const {
  setPriceFilter,
  addVolumeFilter,
  removeVolumeFilter,
  addBrandFilter,
  removeBrandFilter,
  addFormFilter,
  removeFormFilter,
} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
