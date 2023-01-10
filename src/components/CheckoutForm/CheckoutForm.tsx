import { useForm, SubmitHandler } from "react-hook-form"; // Forms
import { yupResolver } from "@hookform/resolvers/yup"; // for React-hook-form work with Yup
import { checkoutValidationSchema } from "validationSchemas/checkoutFormValidation";
import Field from "components/UIkit/Field";
import { countries } from "utils/countries";
import Select from "components/UIkit/Select";

const INITIAL_STATE = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",

  street: "",
  postCode: "",
  // packagingType: "",
  // shippingOption: "",
};

const CheckoutForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ICheckout>({
    defaultValues: { ...INITIAL_STATE },
    resolver: yupResolver(checkoutValidationSchema),
  });

  const onSubmit: SubmitHandler<ICheckout> = (data) => {
    console.log("data", data);
    reset();
  };

  return (
    /* "handleSubmit" will validate inputs before invoking "onSubmit" */
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <p>Personal information</p>
          <Field
            type="text"
            name="firstName"
            placeholder="firstName"
            register={register}
            error={errors.firstName}
          />
          <Field
            type="text"
            name="lastName"
            placeholder="lastName"
            register={register}
            error={errors.lastName}
          />
          <Field
            type="tel"
            name="phone"
            placeholder="phone"
            register={register}
            error={errors.phone}
          />
          <Field
            type="email"
            name="email"
            placeholder="email"
            register={register}
            error={errors.email}
          />
        </div>
        <div>
          <p>Delivery details</p>

          {/* <Select name="country" list={countries} placeholder="Your country" /> */}
          <Field
            type="email"
            name="email"
            placeholder="email"
            register={register}
            error={errors.email}
          />

          <Field
            type="text"
            name="street"
            placeholder="street"
            register={register}
            error={errors.street}
          />
          <Field
            type="text"
            name="postCode"
            placeholder="postCode"
            register={register}
            error={errors.postCode}
          />
          {/* <Select /> */}
          {/* <Select/> */}
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default CheckoutForm;
