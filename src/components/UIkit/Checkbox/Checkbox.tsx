import React from "react";
import {
  CheckboxWrapper,
  HiddenCheckbox,
  Icon,
  Label,
  StyledCheckbox,
} from "./Checkbox.styled";

interface IProps {
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}

const Checkbox: React.FC<IProps> = ({ checked = false, label, ...props }) => {
  return (
    <Label>
      <CheckboxWrapper hasLabel={!!label}>
        <HiddenCheckbox checked={checked} {...props} />
        <StyledCheckbox checked={checked}>
          <Icon viewBox="2 2 20 20">
            <polyline points="20 6 9 17 4 12" />
          </Icon>
        </StyledCheckbox>
      </CheckboxWrapper>
      {label}
    </Label>
  );
};

export default Checkbox;
