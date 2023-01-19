import Box from "components/Box";
import Field from "components/UIkit/Field";
import Select from "components/UIkit/Select";
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
} from "./CheckoutData.styled";
import Checkbox from "components/UIkit/Checkbox";
import ApplePayIcon from "assets/icons/applepay.svg";
import PaypalIcon from "assets/icons/paypal.svg";
import VisaIcon from "assets/icons/visa.svg";
import MastercardIcon from "assets/icons/mastercard.svg";
import { useState } from "react";
import Button from "components/UIkit/Button";
import Cart from "components/Cart";
import { cartData } from "utils/fakeData/fakeCartData";
import CartList from "components/Cart/CartList";

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
  const [isCreditCard, SetIsCreditCard] = useState(false);

  const CreditCardPmntHandler = (isChecked: boolean) => {
    SetIsCreditCard(isChecked);
  };

  return (
    <>
      <Box display="flex" justifyContent="space-between" mt={4}>
        <Box width="712px" border="1px solid grey">
          <Box>
            <H3>Personal information:</H3>
            <FieldSet>
              <FieldWrapper>
                <Label htmlFor="checkout_first_name">First name</Label>
                <Input id="checkout_first_name" name="first_name" type="text" />
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
          </Box>
          <Box>
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
          </Box>
          <Box>
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
          </Box>
        </Box>
        <Box width="370px" border="1px solid grey">
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

          <Button
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

          <CartList data={cartData} />
        </Box>
      </Box>
    </>
  );
};

export default CheckoutData;

// Selects -> placeholders
// breakpoints
// validation
