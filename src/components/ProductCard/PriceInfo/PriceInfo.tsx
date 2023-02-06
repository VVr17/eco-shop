import Box from "components/Box";
import Counter from "components/Counter";
import { Button } from "components/UIkit";
import { AiOutlinePlus } from "react-icons/ai";
import { Price, PriceInfoWrapper, TotalPrice } from "./PriceInfo.styled";

interface IProps {
  currency: string;
  price: string;
  increaseVolume: string;
  measure: string;
  initialVolume: string;
  id: string;
}

const PriceInfo: React.FC<IProps> = ({
  currency,
  price,
  increaseVolume,
  measure,
  initialVolume,
  id,
}) => {
  return (
    <PriceInfoWrapper>
      <Box>
        <TotalPrice>
          Total: {currency} {price}
        </TotalPrice>

        <Price>
          {currency} {price} / {increaseVolume}
          {measure}
        </Price>
      </Box>
      <Box display="flex" flexDirection="column" gridGap={2}>
        <Counter
          id={id}
          initialValue={+initialVolume}
          measure={measure}
          step={+increaseVolume}
        />
        <Button
          text="Add to cart"
          iconRight={AiOutlinePlus}
          iconMargin="16px"
          borderColor="accent"
          backgroundColor="accent"
          color="lightText"
          hoverColor="hoverAccent"
          onClick={() => {
            console.log("add to cart");
          }}
        />
      </Box>
    </PriceInfoWrapper>
  );
};

export default PriceInfo;
