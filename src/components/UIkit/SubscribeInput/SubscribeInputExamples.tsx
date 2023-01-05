import Box from "components/Box";
import SubscribeInput from "./SubscribeInput";

const SubscribeInputExamples = () => {
  return (
    <Box p="30px" backgroundColor="#EDEAE7">
      <SubscribeInput onSubmit={console.log} />
    </Box>
  );
};

export default SubscribeInputExamples;
