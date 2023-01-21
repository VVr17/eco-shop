import Select from "components/UIkit/Select";
import Checkbox from "components/UIkit/Checkbox";
import ApplePayIcon from "assets/icons/applepay.svg";
import PaypalIcon from "assets/icons/paypal.svg";
import VisaIcon from "assets/icons/visa.svg";
import MastercardIcon from "assets/icons/mastercard.svg";
import Button from "components/UIkit/Button";
import CartList from "components/Cart/CartList";
import { countries } from "utils/countries";
import {
  FieldSet,
  FieldWrapper,
  H3,
  Input,
  Label,
  PaymentFieldWrapper,
  PaymentHeading,
  PaymentLogoWrapper,
  PaymentMethodItem,
  PaymentMethodList,
  SummaryHeading,
  SummaryCostsList,
  SummaryCostItem,
  SummaryCostName,
  SummaryCostValue,
  SummaryTotalWrapper,
  CheckoutMainContainer,
  CheckoutDataBlock,
  CheckoutOrder,
  OrderListWrapper,
  OrderPurchaseContainer,
  CheckoutFields,
  ErrorMessage,
} from "./CheckoutData.styled";
import { useRef, useState } from "react";
import { cartData } from "utils/fakeData/fakeCartData";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    first_name: yup.string().required("Required field"),
  })
  .required();

const selectLists: any = {
  country: countries,
  city: [
    {
      name: "Kyiv",
    },
    {
      name: "London",
    },
    {
      name: "Paris",
    },
  ],
  packaging: [
    { name: "Without plastic" },
    { name: "Customized box" },
    { name: "Ceramic plate" },
  ],

  shipping: [
    { name: "By courier" },
    { name: "Nova Poshta" },
    { name: "Self pick-up" },
  ],
};

const CheckoutData = () => {
  const [isCreditCard, setIsCreditCard] = useState(false);
  const [cartHeight, setCartHeight] = useState(0);

  const orderRef = useRef<HTMLInputElement>(null);
  const cartRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // console.log(errors);

  const CreditCardPmntHandler = (isChecked: boolean) => {
    setIsCreditCard(isChecked);
  };

  const onSubmitForm = (data: any) => {
    // e.preventDefault();
    console.log(data);
  };

  return (
    <>
      <CheckoutMainContainer onSubmit={handleSubmit(onSubmitForm)}>
        <CheckoutFields id="checkoutForm">
          <CheckoutDataBlock>
            <H3>Personal information:</H3>
            <FieldSet>
              <FieldWrapper>
                <Label htmlFor="checkout_first_name">First name</Label>
                <Input
                  id="checkout_first_name"
                  {...register("first_name")}
                  type="text"
                  className={errors.first_name ? "hasError" : ""}
                />
                <ErrorMessage>
                  {errors.first_name?.message as string}
                </ErrorMessage>
                {/* <Input
                  id="checkout_first_name"
                  {...register("first_name", {
                    required: "This is required",
                    minLength: { value: 4, message: "min length  is 4" },
                  })}
                  type="text"
                />
                <p>{errors.first_name?.message as string}</p> */}
              </FieldWrapper>
              <FieldWrapper>
                <Label htmlFor="checkout_last_name">Last name</Label>
                <Input id="checkout_last_name" name="last_name" type="text" />
              </FieldWrapper>
              <FieldWrapper>
                <Label htmlFor="checkout_phone">Phone</Label>
                <Input id="checkout_phone" name="phone" type="text" />
              </FieldWrapper>
              <FieldWrapper>
                <Label htmlFor="checkout_email">Email</Label>
                <Input id="checkout_email" name="email" type="text" />
              </FieldWrapper>
            </FieldSet>
          </CheckoutDataBlock>
          <CheckoutDataBlock>
            <H3>Delivery details:</H3>
            <FieldSet>
              <FieldWrapper>
                <Label htmlFor="checkout_country">Country / Region</Label>
                <Select
                  id="checkout_country"
                  list={countries}
                  fontSize="14px"
                  width="100%"
                  name="country"
                  pt="14px"
                  pb="14px"
                  placeholder="--Country--"
                />
              </FieldWrapper>
              <FieldWrapper>
                <Label htmlFor="checkout_city">Town / City</Label>
                <Select
                  id="checkout_city"
                  list={selectLists.city}
                  fontSize="15px"
                  width="100%"
                  name="city"
                />
              </FieldWrapper>
              <FieldWrapper>
                <Label htmlFor="checkout_street">Street</Label>
                <Input id="checkout_street" name="street" type="text" />
              </FieldWrapper>
              <FieldWrapper>
                <Label htmlFor="checkout_postcode">Postcode</Label>
                <Input id="checkout_postcode" name="postcode" type="text" />
              </FieldWrapper>
              <FieldWrapper>
                <Label htmlFor="checkout_packaging">Packaging type</Label>
                <Select
                  id="checkout_packaging"
                  list={selectLists.packaging}
                  fontSize="15px"
                  width="100%"
                  name="packaging"
                />
              </FieldWrapper>
              <FieldWrapper>
                <Label htmlFor="checkout_shipping">Shipping option</Label>
                <Select
                  id="checkout_shipping"
                  list={selectLists.shipping}
                  fontSize="15px"
                  width="100%"
                  name="shipping"
                />
              </FieldWrapper>
            </FieldSet>
          </CheckoutDataBlock>
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

            {isCreditCard && (
              <FieldSet>
                <FieldWrapper>
                  <Label htmlFor="checkout_card_number">Card number</Label>
                  <Input
                    id="checkout_card_number"
                    name="card_number"
                    type="text"
                  />
                </FieldWrapper>

                <PaymentFieldWrapper>
                  <FieldWrapper>
                    <Label htmlFor="checkout_expiration_date">
                      Expiration date
                    </Label>
                    <Input
                      id="checkout_expiration_date"
                      name="expiration_date"
                      type="text"
                    />
                  </FieldWrapper>
                  <FieldWrapper>
                    <Label htmlFor="checkout_cvv">CVV code</Label>
                    <Input id="checkout_cvv" name="cvv" type="password" />
                  </FieldWrapper>
                </PaymentFieldWrapper>
              </FieldSet>
            )}
          </CheckoutDataBlock>
        </CheckoutFields>
        <CheckoutOrder ref={orderRef}>
          <SummaryHeading>Your order:</SummaryHeading>
          <SummaryCostsList>
            <SummaryCostItem>
              <SummaryCostName>Subtotal:</SummaryCostName>
              <SummaryCostValue>$60.30</SummaryCostValue>
            </SummaryCostItem>
            <SummaryCostItem>
              <SummaryCostName>Delivery:</SummaryCostName>
              <SummaryCostValue>$8.20</SummaryCostValue>
            </SummaryCostItem>
          </SummaryCostsList>
          <SummaryTotalWrapper>
            <SummaryCostName>Total:</SummaryCostName>
            <SummaryCostValue>$68.50</SummaryCostValue>
          </SummaryTotalWrapper>

          <OrderPurchaseContainer>
            <Button
              type="submit"
              text="Purchase"
              backgroundColor="accent"
              hoverColor="hoverAccent"
              width="100%"
              color="lightText"
              mt="32px"
              mb="56px"
              pt="18px"
              pb="18px"
            />

            <OrderListWrapper maxHeight={cartHeight} ref={cartRef}>
              <CartList data={cartData} />
            </OrderListWrapper>
          </OrderPurchaseContainer>
        </CheckoutOrder>
      </CheckoutMainContainer>
    </>
  );
};

export default CheckoutData;

// Selects -> placeholders

// validation

// const refForm = useRef(document.getElementById("checkoutForm"));
// const refForm = useRef();

// useEffect(() => {
//   const rectOrder = orderRef?.current?.getBoundingClientRect();
//   const rectCart = cartRef?.current?.getBoundingClientRect();
//   // console.log(cartRef);

//   if (rectOrder && rectCart) {
//     const height =
//       Math.trunc(rectCart.height) +
//       (Math.trunc(rectOrder.bottom) - Math.trunc(rectCart.bottom)) -
//       1;
//     if (cartHeight !== height) {
//       setCartHeight(height);
//       // console.log(cartHeight);
//       // console.log(height);
//       // console.log("rectOrder", rectOrder);
//       // console.log("rectCart", rectCart);
//     }
//   }
// });

// console.log(refForm?.current?.getBoundingClientRect());
// console.log(refForm?.current);

// const { bottom: orderBottom } =
// orderRef?.current?.getBoundingClientRect() as {
//   bottom: number;
// };

// const { bottom: cartBottom } = cartRef?.current?.getBoundingClientRect() as {
//   bottom: number;
// };

// console.log(orderRef.current?.getBoundingClientRect());
// console.log(cartRef.current?.getBoundingClientRect());

// const dim = orderBottom - cartBottom;
// console.log(dim);

// const rectOrder = orderRef?.current?.getBoundingClientRect();
// const rectCart = cartRef?.current?.getBoundingClientRect();

// console.log(rectOrder, rectCart);

// let cartHeight = 0;
// if (rectOrder && rectCart) {
//   setCartHeight(rectCart.height + (rectOrder.bottom - rectCart.bottom));
//   // cartHeight = rectCart.height + (rectOrder.bottom - rectCart.bottom);
//   // dim = rectOrder.bottom - rectCart.bottom;
// }

// console.log(cartHeight);
