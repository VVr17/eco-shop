import { useForm, SubmitHandler } from "react-hook-form"; // Forms
import { yupResolver } from "@hookform/resolvers/yup"; // for React-hook-form work with Yup
import { checkoutValidationSchema } from "validationSchemas/checkoutFormValidation";
import Field from "components/UIkit/Field";

const INITIAL_STATE = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
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

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default CheckoutForm;
