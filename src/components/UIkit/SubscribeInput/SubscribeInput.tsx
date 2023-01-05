import { FC, HTMLInputTypeAttribute, SyntheticEvent } from "react";
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
  onSubmit?: (email: string) => void;
}

const SubscribeInput: FC<ISubscribeInputProps> = ({
  id,
  placeholder = "Your email",
  width = DEFAULT_STYLES_VALUE,
  onSubmit,

  ...rest
}) => {
  const commonProps = { ...UI_BASE_PROPS, ...rest };

  const onSubmitHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formElements = form.elements as any;
    const email = formElements.email.value as string;

    if (!onSubmit) {
      throw new Error(
        "Anton's custom Error exception: callback function onSubmit is not defined"
      );
    }
    onSubmit(email);
  };

  return (
    <SubscribeForm width={width} onSubmit={onSubmitHandler}>
      <Input
        id={id}
        name="email"
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
