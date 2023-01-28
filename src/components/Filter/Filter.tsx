import { filterTypes } from "constants/filterTypes";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectFilter } from "redux/filter/filterSelectors";
import {
  defaultPriceRange,
  setBrandFilter,
  setFormFilter,
  setVolumeFilter,
} from "redux/filter/filterSlice";
import { FilterThumb, Title } from "./Filter.styled";
import FilterType from "./FilterType";

const Filter = () => {
  const dispatch = useDispatch();
  const { volume, form, brand, price } = useSelector(selectFilter);
  console.log("price", price);

  const onVolumeChange = (value: string, checked: boolean) => {
    console.log("onVolumeChange", value);
    dispatch(setVolumeFilter({ value, checked }));
  };

  const onBrandChange = (value: string, checked: boolean) => {
    console.log("onBrandChange", value);
    dispatch(setBrandFilter({ value, checked }));
  };

  const onFormChange = (value: string, checked: boolean) => {
    console.log("onFormChange", value);
    dispatch(setFormFilter({ value, checked }));
  };

  return (
    <>
      <Title>Filter</Title>

      <ul>
        <FilterThumb key={filterTypes.price}>
          <FilterType
            type="range"
            priceRange={defaultPriceRange}
            name={filterTypes.price}
          />
        </FilterThumb>
        <FilterThumb key={filterTypes.form}>
          <FilterType
            type="list"
            name={filterTypes.form}
            listItems={form}
            onCheckboxChange={onFormChange}
          />
        </FilterThumb>
        <FilterThumb key={filterTypes.volume}>
          <FilterType
            type="list"
            name={filterTypes.volume}
            listItems={volume}
            onCheckboxChange={onVolumeChange}
          />
        </FilterThumb>
        <FilterThumb key={filterTypes.brand}>
          <FilterType
            type="listWithSearch"
            name={filterTypes.brand}
            listItems={brand}
            onCheckboxChange={onBrandChange}
          />
        </FilterThumb>
      </ul>
    </>
  );
};

export default Filter;
