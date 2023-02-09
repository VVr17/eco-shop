import React from "react";
import { useDispatch } from "react-redux";
import { RxCross1 } from "react-icons/rx";
import DeleteIconButton from "components/UIkit/DeleteIconButton";
import { filterTypes } from "constants/filterTypes";
import { Label, Type, Value, Wrapper } from "./FilterLabel.styled";
import {
  defaultPriceRange,
  setBrandFilter,
  setFormFilter,
  setPriceFilter,
  setSaleFilter,
  // setVolumeFilter,
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
    if (type === filterTypes.onSale) {
      dispatch(setSaleFilter({ value, checked: false }));
    }
    if (type === filterTypes.brand) {
      dispatch(setBrandFilter({ value, checked: false }));
    }
    if (type === filterTypes.form) {
      dispatch(setFormFilter({ value, checked: false }));
    }
    // if (type === filterTypes.volume) {
    //   dispatch(setVolumeFilter({ value, checked: false }));
    // }
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
