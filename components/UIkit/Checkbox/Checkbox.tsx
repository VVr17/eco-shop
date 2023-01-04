import React from "react";
import {
  CheckboxLabel,
  HiddenCheckbox,
  Icon,
  StyledCheckbox,
} from "./Checkbox.styled";

interface IProps {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<IProps> = ({ checked, ...props }) => (
  <CheckboxLabel onClick={(e) => e.stopPropagation()}>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked}>
      <Icon viewBox="2 2 20 20">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxLabel>
);

export default Checkbox;
