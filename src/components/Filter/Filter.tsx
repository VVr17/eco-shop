import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addBrandFilter,
  addFormFilter,
  addVolumeFilter,
  removeBrandFilter,
  removeFormFilter,
  removeVolumeFilter,
} from "redux/filter/filterSlice";
import { brands, form, volumes } from "utils/fakeData/filter";
import { FilterThumb, Title } from "./Filter.styled";
import FilterType from "./FilterType";

const Filter = () => {
  const dispatch = useDispatch();

  const onVolumeChange = (value: string, checked: boolean) => {
    console.log("onVolumeChange", value);
    if (checked) {
      dispatch(addVolumeFilter(value));
      return;
    }
    dispatch(removeVolumeFilter(value));
  };

  const onBrandChange = (value: string, checked: boolean) => {
    console.log("onBrandChange", value);

    if (checked) {
      dispatch(addBrandFilter(value));
      return;
    }

    dispatch(removeBrandFilter(value));
  };

  const onFormChange = (value: string, checked: boolean) => {
    console.log("onFormChange", value);

    if (checked) {
      dispatch(addFormFilter(value));
      return;
    }

    dispatch(removeFormFilter(value));
  };

  return (
    <>
      <Title>Filter</Title>

      <ul>
        <FilterThumb key="price">
          <FilterType type="range" name="price" />
        </FilterThumb>
        <FilterThumb key="form">
          <FilterType
            type="list"
            name="form"
            listItems={form}
            onCheckboxChange={onFormChange}
          />
        </FilterThumb>
        <FilterThumb key="volume">
          <FilterType
            type="list"
            name="volume"
            listItems={volumes}
            onCheckboxChange={onVolumeChange}
          />
        </FilterThumb>
        <FilterThumb key="brand">
          <FilterType
            type="listWithSearch"
            name="brand"
            listItems={brands}
            onCheckboxChange={onBrandChange}
          />
        </FilterThumb>
      </ul>
    </>
  );
};

export default Filter;
