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
  email: yup.string().required("Number is required"),
});
