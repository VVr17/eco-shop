import { FC, HTMLInputTypeAttribute } from "react";
import { IBaseProps, UI_BASE_PROPS } from "../base/uiBaseProps";
import { Input } from "./Field.styled";
import {
  Ref,
  MultipleFieldErrors,
  Message,
  UseFormRegister,
} from "react-hook-form"; // Forms

export type FieldError = {
  type: string;
  ref?: Ref;
  types?: MultipleFieldErrors;
  message?: Message;
};

interface IFieldProps extends IBaseProps {
  type: "email" | "tel" | "text" | "password";
  id?: HTMLInputTypeAttribute;
  placeholder?: string;
  required?: boolean;
  name: string;
  register: UseFormRegister<any>;
  error: FieldError | undefined;
}

const Field: FC<IFieldProps> = ({
  id,
  type,
  placeholder = "",
  required = false,
  name,
  register,
  error,

  ...rest
}) => {
  const commonProps = { ...UI_BASE_PROPS, ...rest };
  console.log("error", error);
  return (
    <label>
      {name}
      <Input
        type={type}
        id={id}
        // name={name}
        placeholder={placeholder}
        // required={required}
        {...register(name, { required: true })}
        aria-invalid={error ? "true" : "false"}
        // border={error ? "red" : "mainText"}
        // backgroundColor={error ? "bgErrorColor" : ""}
        {...commonProps}
      />
      {error && <p>{error?.message}</p>}
    </label>
  );
};

export default Field;

/*
email
email with button 
phone
text
select 
password (cvv code)

*/
