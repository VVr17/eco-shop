import { FC, HTMLInputTypeAttribute } from "react";
import {
  DEFAULT_STYLES_VALUE,
  IBaseProps,
  UI_BASE_PROPS,
} from "../base/uiBaseProps";
import { Input, SubmitButton, SubscribeForm } from "./SubscribeInput.styled";
import { BsCheck2 } from "react-icons/bs";

interface ISubscribeInputProps extends IBaseProps {
  id?: HTMLInputTypeAttribute;
  placeholder?: string;
}

const SubscribeInput: FC<ISubscribeInputProps> = ({
  id,
  placeholder = "Your email",
  width = DEFAULT_STYLES_VALUE,

  ...rest
}) => {
  const commonProps = { ...UI_BASE_PROPS, ...rest };

  return (
    <SubscribeForm width={width}>
      <Input
        id={id}
        type="email"
        placeholder={placeholder}
        required
        {...commonProps}
      />
      <SubmitButton type="submit">
        <BsCheck2 size="20px" />
      </SubmitButton>
    </SubscribeForm>
  );
};

export default SubscribeInput;
