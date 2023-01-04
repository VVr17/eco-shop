import Box from "../../Box";
import Button from "./Button";

const ButtonExamples = () => {
  return (
    <Box p="30px" backgroundColor="white">
      <br />
      <br />

      <Button text="Button" />
      <Button text="Add" hasPlusIcon />
      <Button
        text="backgroundColor from theme 'accent' "
        backgroundColor="accent"
      />
      <Button
        text="backgroundColor by user #4486ff"
        backgroundColor="#4486ff"
      />

      <br />
      <br />
    </Box>
  );
};

export default ButtonExamples;
