import CreditCardFields from "./CreditCardFields";
import {
  ApplePayIcon,
  MastercardIcon,
  PaypalIcon,
  VisaIcon,
} from "assets/icons/paymentIcons";
import { Checkbox } from "components/UIkit";
import { FC, useState } from "react";
import { FieldErrorsImpl, FieldValues, UseFormRegister } from "react-hook-form";
import {
  CheckoutDataBlock,
  PaymentHeading,
  PaymentLogoWrapper,
  PaymentMethodItem,
  PaymentMethodList,
} from "./CheckoutData.styled";

interface IPaymentsProps {
  register: UseFormRegister<FieldValues>;
  errors: Partial<
    FieldErrorsImpl<{
      [x: string]: any;
    }>
  >;
}

const Payments: FC<IPaymentsProps> = ({ register, errors }) => {
  const [isCreditCard, setIsCreditCard] = useState(false);

  const CreditCardPmntHandler = (isChecked: boolean) => {
    setIsCreditCard(isChecked);
  };

  return (
    <CheckoutDataBlock>
      <PaymentHeading>Payment:</PaymentHeading>
      <PaymentMethodList>
        <PaymentMethodItem>
          <Checkbox label="Apple Pay" />
          <PaymentLogoWrapper>
            <ApplePayIcon />
          </PaymentLogoWrapper>
        </PaymentMethodItem>
        <PaymentMethodItem>
          <Checkbox label="Pay Pal" />
          <PaymentLogoWrapper>
            <PaypalIcon />
          </PaymentLogoWrapper>
        </PaymentMethodItem>
        <PaymentMethodItem>
          <Checkbox
            label="Credit or debit card"
            onChange={CreditCardPmntHandler}
          />
          <PaymentLogoWrapper>
            <MastercardIcon /> <VisaIcon />
          </PaymentLogoWrapper>
        </PaymentMethodItem>
      </PaymentMethodList>

      {isCreditCard && <CreditCardFields register={register} errors={errors} />}
    </CheckoutDataBlock>
  );
};

export default Payments;
