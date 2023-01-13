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
import Image from "next/image";

interface IProps {
  id: string;
  initialVolume: number;
  title: string;
  imageUrl: string;
  imageDimensions: {
    width: number;
    height: number;
  };
  currency: string;
  price: string;
  measure: string;
  counterStep: number;
}

const CartCard: React.FC<IProps> = ({
  id,
  initialVolume,
  currency,
  imageUrl,
  imageDimensions,
  title,
  price,
  measure,
  counterStep,
}) => {
  const { height, width } = imageDimensions;

  return (
    <Card id={id}>
      <ImageWrapper width={`${width}px`} height={`${height}px`}>
        <Image src={imageUrl} width={width} height={height} alt={title} />
      </ImageWrapper>
      <Box display="flex" flexDirection="column" flex={1}>
        <Title>{title}</Title>

        <Box
          display="flex"
          justifyContent="space-between"
          width="100%"
          alignItems="center"
        >
          <Counter
            id={id}
            initialValue={initialVolume}
            measure={measure}
            step={counterStep}
          />
          <Price>
            {currency}
            {price}
          </Price>
        </Box>
        <RemoveButton>
          <RxCross1 size={14} />
        </RemoveButton>
      </Box>
    </Card>
  );
};

export default CartCard;
