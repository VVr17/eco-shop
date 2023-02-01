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

interface IPersonalInformationProps {
  register: UseFormRegister<FieldValues>;
  errors: Partial<
    FieldErrorsImpl<{
      [x: string]: any;
    }>
  >;
  onChangeFieldHandler: () => void;
}

const PersonalInformation: FC<IPersonalInformationProps> = ({
  register,
  errors,
  onChangeFieldHandler,
}) => {
  return (
    <CheckoutDataBlock>
      <H3>Personal information:</H3>
      <FieldSet>
        <FieldWrapper>
          <Label htmlFor="checkout_first_name">First name</Label>
          <CheckoutInput
            register={register}
            errors={errors}
            id="checkout_first_name"
            name="first_name"
            type="text"
            defaultValue={first_name}
            onChange={onChangeFieldHandler as () => void}
          />
        </FieldWrapper>
        <FieldWrapper>
          <Label htmlFor="checkout_last_name">Last name</Label>
          <CheckoutInput
            register={register}
            errors={errors}
            id="checkout_last_name"
            name="last_name"
            type="text"
            defaultValue={last_name}
            onChange={onChangeFieldHandler as () => void}
          />
        </FieldWrapper>
        <FieldWrapper>
          <Label htmlFor="checkout_phone">Phone</Label>
          <CheckoutInput
            register={register}
            errors={errors}
            id="checkout_phone"
            name="phone"
            type="text"
            defaultValue={phone}
            onChange={onChangeFieldHandler as () => void}
          />
        </FieldWrapper>
        <FieldWrapper>
          <Label htmlFor="checkout_email">Email</Label>
          <CheckoutInput
            register={register}
            errors={errors}
            id="checkout_email"
            name="email"
            type="text"
            defaultValue={email}
            onChange={onChangeFieldHandler as () => void}
          />
        </FieldWrapper>
      </FieldSet>
    </CheckoutDataBlock>
  );
};

export default PersonalInformation;
