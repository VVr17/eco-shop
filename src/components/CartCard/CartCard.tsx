import Box from "components/Box";
import Counter from "components/Counter";
import {
  Card,
  ImageWrapper,
  Price,
  RemoveButton,
  Title,
} from "./CartCard.styled";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
const CartCard = () => {
  const [counter, setCounter] = useState(0.5);

  const setIncrement = () => {
    if (counter < 10) setCounter((prev) => prev + 0.5);
  };
  const setDecrement = () => {
    if (counter > 0.5) setCounter((prev) => prev - 0.5);
  };

  return (
    <Card>
      <ImageWrapper></ImageWrapper>
      <Box display="flex" flexDirection="column" flex={1}>
        <Title>Seedless Prune</Title>

        <Box
          display="flex"
          justifyContent="space-between"
          width="100%"
          alignItems="center"
        >
          <Counter
            value={counter}
            onIncrement={setIncrement}
            onDecrement={setDecrement}
          />
          <Price>$42.60</Price>
        </Box>
        <RemoveButton>
          <RxCross1 size={14} />
        </RemoveButton>
      </Box>
    </Card>
  );
};

export default CartCard;
