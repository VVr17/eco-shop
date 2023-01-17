import Box from "components/Box";
import Field from "components/UIkit/Field";
import Select from "components/UIkit/Select";
import { checkoutSections } from "utils/checkoutSections";
import { countries } from "utils/countries";
import { FieldSet, FieldWrapper, H3, Label } from "./CheckoutData.styled";
import { ICountry } from "types/types";

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
      <Box display="flex" justifyContent="space-between">
        <Box width="712px" border="1px solid grey">
          <Box>
            <H3>Personal information:</H3>
            <FieldSet>
              <FieldWrapper>
                <Label htmlFor="checkout_first_name">First name</Label>
                <Field
                  id="checkout_first_name"
                  name="first_name"
                  type="text"
                  fontSize="15px"
                  width="100%"
                />
              </FieldWrapper>
              <FieldWrapper>
                <Label htmlFor="checkout_last_name">Last name</Label>
                <Field
                  id="checkout_last_name"
                  name="last_name"
                  type="text"
                  fontSize="15px"
                  width="100%"
                />
              </FieldWrapper>
              <FieldWrapper>
                <Label htmlFor="checkout_phone">Phone</Label>
                <Field
                  id="checkout_phone"
                  name="phone"
                  type="text"
                  fontSize="15px"
                  width="100%"
                />
              </FieldWrapper>
              <FieldWrapper>
                <Label htmlFor="checkout_email">Email</Label>
                <Field
                  id="checkout_email"
                  name="email"
                  type="text"
                  fontSize="15px"
                  width="100%"
                />
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
                  fontSize="15px"
                  width="100%"
                  name="country"
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
                <Field
                  id="checkout_street"
                  name="street"
                  type="text"
                  fontSize="15px"
                  width="100%"
                />
              </FieldWrapper>
              <FieldWrapper>
                <Label htmlFor="checkout_postcode">Postcode</Label>
                <Field
                  id="checkout_postcode"
                  name="postcode"
                  type="text"
                  fontSize="15px"
                  width="100%"
                />
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

          {/* {checkoutSections.map(({ heading, fieldSet }) => (
            <Box>
              <H3>{heading}</H3>
              <FieldSet>
                {fieldSet.map(({ id, type, label, name }) => (
                  <FieldWrapper>
                    <Label htmlFor={id}>{label}</Label>
                    {type === "text" && (
                      <Field
                        id={id}
                        name={name}
                        type="text"
                        fontSize="15px"
                        width="100%"
                      />
                    )}
                    {type === "select" && (
                      <Select
                        list={selectLists[name as keyof any]}
                        fontSize="15px"
                        width="100%"
                      />
                    )}
                    {type === "password" && (
                      <Field
                        id={id}
                        name={name}
                        type="password"
                        fontSize="15px"
                        width="100%"
                      />
                    )}
                  </FieldWrapper>
                ))}
              </FieldSet>
            </Box>
          ))} */}
        </Box>
        <Box width="370px" border="1px solid grey" backgroundColor="grey">
          Your order:
        </Box>
      </Box>
    </>
  );
};

export default CheckoutData;
