import Box from "components/Box";
import Field from "components/UIkit/Field";
import Select from "components/UIkit/Select";
import { checkoutSections } from "utils/checkoutSections";
import { countries } from "utils/countries";
import {
  FieldSet,
  FieldWrapper,
  H3,
  Input,
  Label,
  PaymentFieldWrapper,
} from "./CheckoutData.styled";
import { ICountry } from "types/types";
import Checkbox from "components/UIkit/Checkbox";

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
            <H3>Payment:</H3>
            <ul>
              <li>
                <div>
                  {/* <input id="payment_applpay" type="checkbox" /> */}
                  {/* <label htmlFor="payment_applpay">Apple Pay</label> */}
                  <Checkbox label="Apple Pay" checked />
                </div>
                <div>logos</div>
              </li>
            </ul>
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
          </Box>
        </Box>
        <Box width="370px" border="1px solid grey" backgroundColor="grey">
          Your order:
        </Box>
      </Box>
    </>
  );
};

export default CheckoutData;
