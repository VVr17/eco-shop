import { FC } from "react";
import { FieldErrorsImpl, FieldValues, UseFormRegister } from "react-hook-form";
import {
  CheckoutDataBlock,
  FieldSet,
  FieldWrapper,
  H3,
  Label,
} from "./CheckoutData.styled";
import CheckoutInput from "./CheckoutInput";

const data = [
  { id: "checkout_first_name", name: "first_name", label: "First name" },
  { id: "checkout_last_name", name: "last_name", label: "Last name" },
  { id: "checkout_phone", name: "phone", label: "Phone" },
  { id: "checkout_email", name: "email", label: "Email" },
];

interface IPersonalInformationProps {
  defaultValues: string[];
  register: UseFormRegister<FieldValues>;
  errors: Partial<
    FieldErrorsImpl<{
      [x: string]: any;
    }>
  >;
  onChange: () => void;
}

const PersonalInformation: FC<IPersonalInformationProps> = ({
  defaultValues,
  register,
  errors,
  onChange,
}) => {
  return (
    <CheckoutDataBlock>
      <H3>Personal information:</H3>
      <FieldSet>
        {data.map(({ id, name, label }, i) => (
          <FieldWrapper key={id}>
            <Label htmlFor={id}>{label}</Label>
            <CheckoutInput
              register={register}
              errors={errors}
              id={id}
              name={name}
              type="text"
              defaultValue={defaultValues[i]}
              onChange={onChange as () => void}
            />
          </FieldWrapper>
        ))}
      </FieldSet>
    </CheckoutDataBlock>
  );
};

export default PersonalInformation;
