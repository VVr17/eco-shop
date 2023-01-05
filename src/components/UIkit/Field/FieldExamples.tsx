import Box from "components/Box";
import Field from "./Field";

const FieldExamples = () => {
  return (
    <>
      <Box p="30px" backgroundColor="#E5E5E5">
        <Field type="text" id="asd1123" width="300px" pt="14px" pb="14px" />
        <br></br>
        <Field
          type="email"
          width="300px"
          pt="14px"
          pb="14px"
          placeholder="E-mail"
          fontSize="s"
          required
        />
        <br></br>

        <Field
          type="tel"
          width="200px"
          placeholder="Phone"
          fontSize="s"
          required
        />
        <br></br>
        <Field
          type="password"
          width="300px"
          placeholder="Password"
          fontSize="s"
          required
        />
      </Box>
    </>
  );
};

export default FieldExamples;
