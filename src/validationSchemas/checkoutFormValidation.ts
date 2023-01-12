import * as yup from "yup"; // Form validation

export const checkoutValidationSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(4, "Name should be at least 4 characters")
    .max(20, "Name should be at most 20 characters")
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required("Name is required"),
  lastName: yup
    .string()
    .min(4, "Name should be at least 4 characters")
    .max(20, "Name should be at most 20 characters")
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required("Name is required"),
  phone: yup
    .string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
    )
    .required("Number is required"),
  email: yup
    .string()
    .email()
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "email@email.com"
    )
    .required("Number is required"),

  street: yup
    .string()
    .min(4, "Street should be at least 4 characters")
    .max(30, "Street should be at most 20 characters")
    .required("Street is required"),

  postCode: yup
    .string()
    .length(5, "PostCode should contain 5 digits")
    .required("PostCode is required"),

  // packagingType: yup
  //   .string()
  //   .min(4, "Package should be at least 4 characters")
  //   .max(30, "Package should be at most 20 characters")
  //   .required("Package is required"),
  // shippingOption: yup
  //   .string()
  //   .min(4, "Delivery type should be at least 4 characters")
  //   .max(30, "Delivery type should be at most 20 characters")
  //   .required("Delivery type is required"),
});

export const validationPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .required("Please enter your password")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    ),
  confirmPassword: yup
    .string()
    .required("Please confirm your password")
    .oneOf([yup.ref("password"), null], "Passwords don't match."),
});
