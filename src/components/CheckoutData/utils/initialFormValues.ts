export interface IFormData {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  country: string;
  city: string;
  street: string;
  postcode: string;
  packaging: string;
  shipping: string;
}

export const initialValues: IFormData = {
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
