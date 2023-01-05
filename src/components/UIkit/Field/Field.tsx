import { FC, HTMLInputTypeAttribute } from "react";
import { IBaseProps, UI_BASE_PROPS } from "../base/uiBaseProps";
import { Input } from "./Field.styled";

interface IFieldProps extends IBaseProps {
  type: "email" | "tel" | "text" | "password";
  id?: HTMLInputTypeAttribute;
  placeholder?: string;
  required?: boolean;
}

const Field: FC<IFieldProps> = ({
  id,
  type,
  placeholder = "",
  required = false,
  ...rest
}) => {
  const commonProps = { ...UI_BASE_PROPS, ...rest };

  return (
    <Input
      type={type}
      id={id}
      placeholder={placeholder}
      required={required}
      {...commonProps}
    />
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
