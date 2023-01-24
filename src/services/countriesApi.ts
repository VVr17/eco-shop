import axios from "axios";

// https://countriesnow.space/api/v0.1/countries/info?returns=name

export const getCountries = async () => {
  const response = await axios.get(
    "https://countriesnow.space/api/v0.1/countries/states"
  );
  return response.data;
};

export const getCities = async (country: string) => {
  const response = await axios.post(
    "https://countriesnow.space/api/v0.1/countries/cities",
    { country: country }
  );

  return response.data;
};
