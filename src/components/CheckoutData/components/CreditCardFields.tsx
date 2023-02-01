import { FC, useState } from "react";
import { FieldErrorsImpl, FieldValues, UseFormRegister } from "react-hook-form";
import {
  FieldSet,
  FieldWrapper,
  Label,
  PaymentFieldWrapper,
} from "./CheckoutData.styled";
import CheckoutInput from "./CheckoutInput";

const initialValues = {
  card_number: "",
  expiration_date: "",
  cvv: "",
};

interface ICreditCardFieldsProps {
  register: UseFormRegister<FieldValues>;
  errors: Partial<
    FieldErrorsImpl<{
      [x: string]: any;
    }>
  >;
}

const CreditCardFields: FC<ICreditCardFieldsProps> = ({ register, errors }) => {
  const [values, setValues] = useState(initialValues);

  const onChangeFieldHandler = (e: Event) => {
    const { name, value } = e.target as HTMLInputElement;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const { card_number, expiration_date, cvv } = values;

  return (
    <FieldSet>
      <FieldWrapper>
        <Label htmlFor="checkout_card_number">Card number</Label>
        <CheckoutInput
          register={register}
          errors={errors}
          id="checkout_card_number"
          name="card_number"
          type="text"
          defaultValue={card_number}
          onChange={onChangeFieldHandler as () => void}
        />
      </FieldWrapper>

      <PaymentFieldWrapper>
        <FieldWrapper>
          <Label htmlFor="checkout_expiration_date">Expiration date</Label>

          <CheckoutInput
            register={register}
            errors={errors}
            id="checkout_expiration_date"
            name="expiration_date"
            type="text"
            defaultValue={expiration_date}
            onChange={onChangeFieldHandler as () => void}
          />
        </FieldWrapper>
        <FieldWrapper>
          <Label htmlFor="checkout_cvv">CVV code</Label>
          <CheckoutInput
            register={register}
            errors={errors}
            id="checkout_cvv"
            name="cvv"
            type="password"
            defaultValue={cvv}
            onChange={onChangeFieldHandler as () => void}
          />
        </FieldWrapper>
      </PaymentFieldWrapper>
    </FieldSet>
  );
};

export default CreditCardFields;
