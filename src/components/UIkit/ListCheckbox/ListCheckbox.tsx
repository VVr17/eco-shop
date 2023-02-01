import { ChangeEventHandler } from "react";
import {
  CheckboxWrapper,
  HiddenCheckbox,
  Icon,
  Label,
  StyledCheckbox,
} from "./ListCheckbox.styled";

interface IProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
}

const ListCheckbox: React.FC<IProps> = ({ label, onChange, checked }) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const isChecked = event.currentTarget.checked;
    onChange(isChecked);
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

export default ListCheckbox;
