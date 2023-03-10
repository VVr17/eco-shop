import * as yup from "yup";

const checkoutValidationSchema = yup.object({
  first_name: yup
    .string()
    .max(50, "Required maximum 50 symbols")
    .required("Required field"),
  last_name: yup.string().max(50, "Required maximum 50 symbols"),
  // .required("Required field"),
  phone: yup.string(),
  // .matches(
  //   /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
  //   "Invalid phone number"
  // ),
  // .required("Required field"),
  email: yup.string().email("Invalid email"),
  // .required("Required field"),
  country: yup.string().not(["--Country--"], "Required field"),
  // .required("Required field"),
  city: yup.string().not(["--City--"], "Required field"),
  // .required("Required field"),
  street: yup.string(),
  // .required(),
  postcode: yup.string(),
  // .length(5),
  // .matches(/^[0-9]{5}/, "Invalid zip code"),
  // .required(),
  packaging: yup.string().not(["--Packaging--"], "Required field"),
  // .required("Required field"),
  shipping: yup.string().not(["--Shipping--"], "Required field"),
  // .required("Required field"),
  card_number: yup
    .string()
    .matches(/[0-9]/, "Card number must be 16 digits")
    .min(16)
    .max(16),
  expiration_date: yup.date(),
  cvv: yup.string().matches(/[0-9]/, "CVV must be 3 digits").min(3).max(3),
});

export default checkoutValidationSchema;
