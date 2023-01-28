import Box from "components/Box";
import React from "react";
import { Label, Type, Value } from "./FilterLabel.styled";
import { RxCross1 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { filterTypes } from "constants/filterTypes";
import {
  defaultPriceRange,
  setBrandFilter,
  setFormFilter,
  setPriceFilter,
  setVolumeFilter,
} from "redux/filter/filterSlice";

interface IProps {
  type: string;
  value: string;
}
const FilterLabel: React.FC<IProps> = ({ type, value }) => {
  const dispatch = useDispatch();

  const handleRemoveClick = (type: string, value: string) => {
    if (type === filterTypes.price) {
      dispatch(setPriceFilter(defaultPriceRange));
    }
    if (type === filterTypes.volume) {
      dispatch(setVolumeFilter({ value, checked: false }));
    }
    if (type === filterTypes.brand) {
      dispatch(setBrandFilter({ value, checked: false }));
    }
    if (type === filterTypes.form) {
      dispatch(setFormFilter({ value, checked: false }));
    }
  };

  return (
    <Label>
      <Box display="flex" marginRight={[3]}>
        <Type>{type}:</Type>
        <Value>{value}</Value>
      </Box>
      <button onClick={() => handleRemoveClick(type, value)}>
        <RxCross1 size={14} />
      </button>
    </Label>
  );
};

export default FilterLabel;
