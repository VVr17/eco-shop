import * as yup from "yup";

const loginValidationSchema = yup.object({
  firstname: yup
    .string()
    .max(50, "Required maximum 50 symbols")
    .required("Required field"),
  lastname: yup
    .string()
    .max(50, "Required maximum 50 symbols")
    .required("Required field"),
  tel: yup
    .string()
    .matches(
      /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
      "Invalid phone number"
    )
    .required("Required field"),
  email: yup.string().email("Invalid email").required("Required field"),
  birthdate: yup.string(),
  password: yup
    .string()
    .min(8, "Required min 8 symbols")
    .matches(/[0-9a-zA-Z]/, "Only numbers and letters"),
});

export default loginValidationSchema;
