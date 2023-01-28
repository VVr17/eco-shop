import Box from "components/Box";
import React from "react";
import { Label, Type, Value, Wrapper } from "./FilterLabel.styled";
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
import DeleteIconButton from "components/UIkit/DeleteIconButton";

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
    <Wrapper>
      <Label>
        <Type>{type}:</Type>
        <Value>{value}</Value>
      </Label>
      <DeleteIconButton
        aria-label="delete filter"
        onClick={() => handleRemoveClick(type, value)}
      >
        <RxCross1 size={14} />
      </DeleteIconButton>
    </Wrapper>
  );
};

export default FilterLabel;
