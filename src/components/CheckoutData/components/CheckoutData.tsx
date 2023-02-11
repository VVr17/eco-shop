import Payments from "./Payments";
import Summary from "./Summary";
import CartList from "components/Cart/CartList";
import StorageService from "services/StorageService";
import PersonalInformation from "./PersonalInformation";
import DeliveryDetails from "./DeliveryDetails";
import { Button } from "components/UIkit";
import {
  CheckoutMainContainer,
  CheckoutOrder,
  OrderListWrapper,
  OrderPurchaseContainer,
  CheckoutFields,
} from "./CheckoutData.styled";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { checkoutValidationSchema } from "../utils";
import { IFormData, initialValues } from "../utils/initialFormValues";
import { useSelector } from "react-redux";
import { cartSelector } from "redux/cart/selectors";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { countSubtotal } from "utils/cartTotalCount";
import { clearCart } from "redux/cart/slice";

const storage = new StorageService("checkoutFormData");

const CheckoutData = () => {
  const [checkoutFormData, setCheckoutFormData] = useState(
    () => storage.get() || initialValues
  );

  const [cartHeight, setCartHeight] = useState(0);

  const formRef: { current: HTMLFormElement | null } = useRef(null);
  const orderRef = useRef<HTMLInputElement>(null);
  const cartRef = useRef<HTMLInputElement>(null);
  const cart = useSelector(cartSelector);
  const dispatch = useDispatch();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(checkoutValidationSchema),
  });

  //Refresh form data values
  useEffect(() => {
    storage.set(checkoutFormData);
  }, [checkoutFormData]);

  useEffect(() => {
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

  const setCheckoutState = (name: string, value: string) => {
    setCheckoutFormData((prevState: IFormData) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmitForm = (data: Object) => {
    // Here must be fetch post with order
    const sendThisToDatabase = {
      customer: data,
      order: cart,
    };
    console.log(sendThisToDatabase);

    // Here - cleare cart persisted data
    dispatch(clearCart());
    router.push("/");
    //------------------------------------

    setCheckoutFormData(initialValues);
  };

  const onChangeSelect = (name: string, value: string) => {
    setCheckoutState(name, value);
  };

  const onChangeFieldHandler = (e: Event) => {
    const { name, value } = e.target as HTMLInputElement;
    setCheckoutState(name, value);
  };

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
  } = checkoutFormData as IFormData;

  const subtotal = countSubtotal(cart);

  return (
    <>
      <CheckoutMainContainer
        ref={formRef}
        onSubmit={handleSubmit(onSubmitForm)}
      >
        <CheckoutFields id="checkoutForm">
          <PersonalInformation
            defaultValues={[first_name, last_name, phone, email]}
            register={register}
            errors={errors}
            onChange={onChangeFieldHandler as () => void}
          />
          <DeliveryDetails
            register={register}
            errors={errors}
            onChangeSelect={onChangeSelect}
            defaultValues={[
              country,
              city,
              street,
              postcode,
              packaging,
              shipping,
            ]}
            onChange={onChangeFieldHandler as () => void}
          />

          <Payments register={register} errors={errors} />
        </CheckoutFields>

        <CheckoutOrder ref={orderRef}>
          <Summary
            currency="$"
            list={[
              { label: "Subtotal", cost: subtotal },
              { label: "Delivery", cost: Number(subtotal) / 10 },
            ]}
          />

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
              <CartList />
            </OrderListWrapper>
          </OrderPurchaseContainer>
        </CheckoutOrder>
      </CheckoutMainContainer>
    </>
  );
};

export default CheckoutData;

//Page - server render
