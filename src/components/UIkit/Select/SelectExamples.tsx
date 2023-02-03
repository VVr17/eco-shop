import Box from "components/Box";
import { SyntheticEvent } from "react";
import Field from "../Field";
import Select from "./Select";
// import { countries } from "utils/countries";

const SelectExamples = () => {
  const onSubmitHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    const form = e.target as any;
    console.log(form.elements.country.value);
  };

  return (
    <Box p="30px" backgroundColor="#EDEAE7">
      <form onSubmit={onSubmitHandler}>
        <Select name="country" list={[]} placeholder="Your country" />
        {/* <Field type="text" name="test" /> */}
        {/* <button type="submit">submit</button> */}
      </form>

      {/* <Select name="city" /> */}
    </Box>
  );
};

export default SelectExamples;
