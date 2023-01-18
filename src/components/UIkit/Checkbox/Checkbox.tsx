import React, { ChangeEventHandler, useState } from "react";
import {
  CheckboxWrapper,
  HiddenCheckbox,
  Icon,
  Label,
  StyledCheckbox,
} from "./Checkbox.styled";

interface IProps {
  initialChecked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
}

const Checkbox: React.FC<IProps> = ({
  initialChecked = false,
  label,
  onChange,
}) => {
  const [checked, setChecked] = useState(initialChecked);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const currentValue = event.currentTarget.checked;
    setChecked(currentValue);

    if (onChange) onChange(currentValue);
  };

  return (
    <Label>
      <CheckboxWrapper hasLabel={!!label}>
        <HiddenCheckbox checked={checked} onChange={handleChange} />
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
