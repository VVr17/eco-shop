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
          {checkoutSections.map(({ heading, fieldSet }) => (
            <Box>
              <H3>{heading}</H3>
              <FieldSet>
                {fieldSet.map(({ id, type, label, name }) => (
                  <FieldWrapper>
                    <Label htmlFor={id}>{label}</Label>
                    {type === "text" && (
                      <Field id={id} name={name} type="text" />
                    )}
                    {type === "select" && (
                      <Select list={selectLists[name as keyof any]} />
                    )}
                    {type === "password" && (
                      <Field id={id} name={name} type="password" />
                    )}
                  </FieldWrapper>
                ))}
              </FieldSet>
            </Box>
          ))}
        </Box>
        <Box width="370px" border="1px solid grey" backgroundColor="grey">
          Your order:
        </Box>
      </Box>
    </>
  );
};

export default CheckoutData;
