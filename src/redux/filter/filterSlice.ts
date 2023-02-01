import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICheckboxType, IFilter, IPriceRange } from "types/filter";
import { brands, form, volumes } from "utils/fakeData/filter";

export const defaultPriceRange = { min: 0, max: 50 };

export const filterInitialState: IFilter = {
  price: defaultPriceRange,
  volume: volumes,
  brand: brands,
  form: form,
};

const filterSlice = createSlice({
  name: "filter",
  initialState: filterInitialState,
  reducers: {
    setPriceFilter(state, { payload }: PayloadAction<IPriceRange>) {
      state.price = payload;
    },
    setVolumeFilter(state, { payload }: PayloadAction<ICheckboxType>) {
      state.volume = state.volume.map((item) => {
        if (item.value == payload.value) {
          item.checked = payload.checked;
        }
        return item;
      });
    },
    setBrandFilter(state, { payload }: PayloadAction<ICheckboxType>) {
      state.brand = state.brand.map((item) => {
        if (item.value == payload.value) {
          item.checked = payload.checked;
        }
        return item;
      });
    },
    setFormFilter(state, { payload }: PayloadAction<ICheckboxType>) {
      state.form = state.form.map((item) => {
        if (item.value == payload.value) {
          item.checked = payload.checked;
        }
        return item;
      });
    },
    removeAllFilters(state) {
      state.brand = brands;
      state.price = { min: defaultPriceRange.min, max: defaultPriceRange.max };
      state.form = form;
      state.volume = volumes;
    },
  },
});

export const {
  setPriceFilter,
  setVolumeFilter,
  setBrandFilter,
  setFormFilter,
  removeAllFilters,
} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
