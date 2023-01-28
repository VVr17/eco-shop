import { filterTypes } from "constants/filterTypes";

export interface IPriceRange {
  min: number;
  max: number;
}

export interface ICheckboxType {
  value: string;
  checked: boolean;
}

export interface IFilter {
  [filterTypes.price]: IPriceRange;
  [filterTypes.volume]: ICheckboxType[];
  [filterTypes.brand]: ICheckboxType[];
  [filterTypes.form]: ICheckboxType[];
}
