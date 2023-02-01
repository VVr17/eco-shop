import { SelectReg } from "components/UIkit";
import { FC, useEffect, useState } from "react";
import { FieldErrorsImpl, FieldValues, UseFormRegister } from "react-hook-form";
import { getCities, getCountries } from "services/countriesApi";
import { packagingList, shippingList } from "../utils";
import {
  CheckoutDataBlock,
  ErrorMessage,
  FieldSet,
  FieldWrapper,
  H3,
  Label,
} from "./CheckoutData.styled";
import CheckoutInput from "./CheckoutInput";

interface IDeliveryDetailsProps {
  defaultValues: string[];
  register: UseFormRegister<FieldValues>;
  errors: Partial<
    FieldErrorsImpl<{
      [x: string]: any;
    }>
  >;
  onChangeSelect: (name: string, value: string) => void;
  onChange: () => void;
}

const DeliveryDetails: FC<IDeliveryDetailsProps> = ({
  register,
  errors,
  defaultValues,
  onChangeSelect,
  onChange,
}) => {
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [defaultCity, setDefaultCity] = useState(defaultValues[1]);

  useEffect(() => {
    // Fetch countries on first render
    (async () => {
      try {
        const response = await getCountries();
        setCountries(response.data);
      } catch (err) {
        console.log("something went wrong. Error:", err);
        alert("something went wrong");
      }
    })();
  }, []);

  const onCountrySelectHandler = async (
    country: string,
    setDefaultValue: () => void
  ) => {
    try {
      const response = await getCities(country);
      setCities(response.data);
    } catch (err) {
      alert(`We don't work in ${country} yet `);
      setDefaultValue();
      setCities([]);
    }
  };

  const onChangeWrapper = (name: string, value: string) => {
    setDefaultCity("");
    onChangeSelect(name, value);
  };

  return (
    <CheckoutDataBlock>
      <H3>Delivery details:</H3>
      <FieldSet>
        <FieldWrapper>
          <Label htmlFor="checkout_country">Country / Region</Label>
          <SelectReg
            id="checkout_country"
            list={countries}
            fontSize="14px"
            width="100%"
            name="country"
            pt="14px"
            pb="14px"
            placeholder="--Country--"
            register={register}
            className={errors.country ? "hasError" : ""}
            onSelect={onCountrySelectHandler}
            defaultValue={defaultValues[0]}
            onChangeSelect={onChangeWrapper}
          />
          <ErrorMessage>{errors.country?.message as string}</ErrorMessage>
        </FieldWrapper>
        <FieldWrapper>
          <Label htmlFor="checkout_city">Town / City</Label>
          <SelectReg
            id="checkout_city"
            list={cities}
            fontSize="15px"
            width="100%"
            name="city"
            placeholder="--City--"
            register={register}
            className={errors.city ? "hasError" : ""}
            defaultValue={defaultCity}
            // defaultValue={defaultValues[1]}
            onChangeSelect={onChangeSelect}
          />
          <ErrorMessage>{errors.city?.message as string}</ErrorMessage>
        </FieldWrapper>
        <FieldWrapper>
          <Label htmlFor="checkout_street">Street</Label>
          <CheckoutInput
            register={register}
            errors={errors}
            id="checkout_street"
            name="street"
            type="text"
            defaultValue={defaultValues[2]}
            onChange={onChange as () => void}
          />
        </FieldWrapper>
        <FieldWrapper>
          <Label htmlFor="checkout_postcode">Postcode</Label>
          <CheckoutInput
            register={register}
            errors={errors}
            id="checkout_postcode"
            name="postcode"
            type="text"
            defaultValue={defaultValues[3]}
            onChange={onChange as () => void}
          />
        </FieldWrapper>
        <FieldWrapper>
          <Label htmlFor="checkout_packaging">Packaging type</Label>
          <SelectReg
            id="checkout_packaging"
            list={packagingList}
            fontSize="15px"
            width="100%"
            name="packaging"
            placeholder="--Packaging--"
            register={register}
            className={errors.packaging ? "hasError" : ""}
            defaultValue={defaultValues[4]}
            onChangeSelect={onChangeSelect}
          />
          <ErrorMessage>{errors.packaging?.message as string}</ErrorMessage>
        </FieldWrapper>
        <FieldWrapper>
          <Label htmlFor="checkout_shipping">Shipping option</Label>
          <SelectReg
            id="checkout_shipping"
            list={shippingList}
            fontSize="15px"
            width="100%"
            name="shipping"
            placeholder="--Shipping--"
            register={register}
            className={errors.shipping ? "hasError" : ""}
            defaultValue={defaultValues[5]}
            onChangeSelect={onChangeSelect}
          />
          <ErrorMessage>{errors.shipping?.message as string}</ErrorMessage>
        </FieldWrapper>
      </FieldSet>
    </CheckoutDataBlock>
  );
};

export default DeliveryDetails;
