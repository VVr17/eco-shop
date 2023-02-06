import {
  VitaminA,
  VitaminB1,
  VitaminB12,
  VitaminB2,
  VitaminB3,
  VitaminB5,
  VitaminB6,
  VitaminC,
  VitaminE,
  VitaminK,
} from "assets/icons/vitamins";
import Box from "components/Box";

const Vitamins = () => {
  return (
    <Box marginBottom={4}>
      <VitaminB1 />
      <VitaminC />
      <VitaminB2 />
      <VitaminA />
      <VitaminE />
    </Box>
  );
};

export default Vitamins;
