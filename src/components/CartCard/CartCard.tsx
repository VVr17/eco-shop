import Box from "components/Box";
import Counter from "components/Counter";
import {
  Card,
  ImageWrapper,
  Price,
  RemoveButton,
  Title,
} from "./CartCard.styled";
import Image from "next/image";
import { RxCross1 } from "react-icons/rx";

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
  //Chertok
  shareValue: (id: string, value: number) => void;
  onRemoveCard: (id: string) => void;
  //Chertok
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
  //Chertok
  shareValue,
  onRemoveCard,
  //Chertok
}) => {
  const { height, width } = imageDimensions;

  return (
    <Card id={id}>
      <ImageWrapper width={`${width}px`} height={`${height}px`}>
        <Image
          src={imageUrl}
          width={width}
          height={height}
          alt={title}
          style={{ width: "auto", height: "auto" }} // done for solve warnings in console
        />
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
            shareValue={shareValue}
          />
          <Price>
            {currency}
            {price}
          </Price>
        </Box>
        <RemoveButton
          onClick={() => {
            onRemoveCard(id);
          }}
        >
          <RxCross1 size={14} />
        </RemoveButton>
      </Box>
    </Card>
  );
};

export default CartCard;
