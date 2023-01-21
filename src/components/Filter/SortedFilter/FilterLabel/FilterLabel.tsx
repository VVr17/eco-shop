import Box from "components/Box";
import React from "react";
import { Label, Type, Value } from "./FilterLabel.styled";
import { RxCross1 } from "react-icons/rx";
import { DEFAULT_ICON_SIZE } from "constants/constants";

interface IProps {
  type: string;
  value: string;
}
const FilterLabel: React.FC<IProps> = ({ type, value }) => {
  return (
    <Label>
      <Box display="flex" marginRight={[3]}>
        <Type>{type}:</Type>
        <Value>{value}</Value>
      </Box>
      <RxCross1 size={14} />
    </Label>
  );
};

export default FilterLabel;
