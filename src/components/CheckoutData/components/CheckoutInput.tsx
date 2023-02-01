import { FC } from "react";
import { FieldErrorsImpl, FieldValues, UseFormRegister } from "react-hook-form";
import { ErrorMessage, Input } from "./CheckoutData.styled";

interface ICheckoutInput {
  id: string;
  register: UseFormRegister<FieldValues>;
  type: "text" | "password";
  errors: Partial<
    FieldErrorsImpl<{
      [x: string]: any;
    }>
  >;
  name: string;
  defaultValue?: string;
  onChange?: () => void;
}

const CheckoutInput: FC<ICheckoutInput> = ({
  id,
  register,
  type,
  errors,
  name,
  defaultValue,
  onChange,
}) => {
  return (
    <>
      <Input
        id={id}
        {...register(name)}
        type={type}
        className={errors[name] ? "hasError" : ""}
        value={defaultValue}
        onChange={onChange}
      />
      <ErrorMessage>{errors[name]?.message as string}</ErrorMessage>
    </>
  );
};

export default CheckoutInput;
