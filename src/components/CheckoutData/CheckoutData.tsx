import { Checkbox, Button, SelectReg } from "components/UIkit";
import {
  ApplePayIcon,
  PaypalIcon,
  VisaIcon,
  MastercardIcon,
} from "assets/icons/paymentIcons";
import CartList from "components/Cart/CartList";
import CheckoutInput from "./CheckoutInput";
import {
  FieldSet,
  FieldWrapper,
  H3,
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
import { useEffect, useRef, useState } from "react";
import { cartData } from "utils/fakeData/fakeCartData";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  checkoutValidationSchema,
  packagingList,
  shippingList,
} from "utils/checkout";
import { getCities, getCountries } from "services/countriesApi";

const CHECKOUT_STORAGE_KEY = "checkoutFormData";

const initialValues = {
  first_name: "",
  last_name: "",
  phone: "",
  email: "",
  country: "",
  city: "",
  street: "",
  postcode: "",
  packaging: "",
  shipping: "",
};

const CheckoutData = () => {
  const [checkoutFormData, setCheckoutFormData] = useState({});

  const [isCreditCard, setIsCreditCard] = useState(false);
  const [cartHeight, setCartHeight] = useState(0);
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const formRef: { current: HTMLFormElement | null } = useRef(null);

  const storageFormData =
    typeof localStorage !== "undefined"
      ? localStorage.getItem(CHECKOUT_STORAGE_KEY)
      : null;
  const defaultFormValues = !storageFormData ? initialValues : storageFormData;

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(checkoutValidationSchema),
    defaultValues: defaultFormValues as any,
  });

  // const test = watch(["first_name"]);
  // console.log(test);

  // useEffect(() => {
  //   console.log(test);
  // }, [test]);

  // useEffect(() => {
  //   const subscription = watch(
  //     (value, { name, type }) => console.log(value, name, type)
  //     // setCheckoutFormData((prevState) => ({
  //     //   ...prevState,
  //     //   [name as string]: value,
  //     // }))
  //   );
  //   return () => subscription.unsubscribe();
  // }, [watch]);

  useEffect(() => {
    // Init form data
    // const data = localStorage.getItem(CHECKOUT_STORAGE_KEY);

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

    //Prevent onEnter form submit
    const onEnterSubmit = (e: Event & { code: string }) => {
      if (e.code === "Enter") {
        e.preventDefault();
        return;
      }
    };

    formRef.current?.addEventListener("keydown", onEnterSubmit);

    return () => {
      formRef.current?.removeEventListener("keydown", onEnterSubmit);
    };
  }, []);

  const orderRef = useRef<HTMLInputElement>(null);
  const cartRef = useRef<HTMLInputElement>(null);

  const CreditCardPmntHandler = (isChecked: boolean) => {
    setIsCreditCard(isChecked);
  };

  const onSubmitForm = (data: Object) => {
    console.log(data);
  };

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

  // console.log(checkoutFormData);
  const {
    first_name,
    last_name,
    phone,
    email,
    country,
    city,
    street,
    postcode,
    packaging,
    shipping,
  } = initialValues;

  return (
    <>
      <CheckoutMainContainer
        // id="checkoutFormID"
        ref={formRef}
        onSubmit={handleSubmit(onSubmitForm)}
      >
        <CheckoutFields id="checkoutForm">
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
                />
              </FieldWrapper>
            </FieldSet>
          </CheckoutDataBlock>
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
                  defaultValue={country}
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
                  defaultValue={city}
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
                  defaultValue={street}
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
                  defaultValue={postcode}
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
                  defaultValue={packaging}
                />
                <ErrorMessage>
                  {errors.packaging?.message as string}
                </ErrorMessage>
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
                  defaultValue={shipping}
                />
                <ErrorMessage>
                  {errors.shipping?.message as string}
                </ErrorMessage>
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
                  <CheckoutInput
                    register={register}
                    errors={errors}
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
                    {/* <Input
                      id="checkout_expiration_date"
                      name="expiration_date"
                      type="text"
                    /> */}
                    <CheckoutInput
                      register={register}
                      errors={errors}
                      id="checkout_expiration_date"
                      name="expiration_date"
                      type="text"
                    />
                  </FieldWrapper>
                  <FieldWrapper>
                    <Label htmlFor="checkout_cvv">CVV code</Label>
                    {/* <Input id="checkout_cvv" name="cvv" type="password" /> */}
                    <CheckoutInput
                      register={register}
                      errors={errors}
                      id="checkout_cvv"
                      name="cvv"
                      type="password"
                    />
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

//Refactor - split component
// form data local storage
//Page - server render

//--------------------------------

/*
1) Init -> ask storage if yes -> from storage, if no -> initial object
2) State {} -> setState after chacnge -> useEffect
3) Save to storage



*/
