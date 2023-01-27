import Box from "components/Box";
import React from "react";
import { Label, Type, Value } from "./FilterLabel.styled";
import { RxCross1 } from "react-icons/rx";
import { useDispatch } from "react-redux";

interface IProps {
  type: string;
  value: string;
}
const FilterLabel: React.FC<IProps> = ({ type, value }) => {
  const dispatch = useDispatch();

  const handleClick = (type: string, value: string) => {
    console.log("type", type, value);
  };

  return (
    <Label>
      <Box display="flex" marginRight={[3]}>
        <Type>{type}:</Type>
        <Value>{value}</Value>
      </Box>
      <button onClick={() => handleClick(type, value)}>
        <RxCross1 size={14} />
      </button>
    </Label>
  );
};

export default FilterLabel;
