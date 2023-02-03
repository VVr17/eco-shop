import Image from "next/image";
import { ImageWrapper, Number, Wrapper } from "./ErrorImage.styled";

const ErrorImage = () => {
  return (
    <Wrapper>
      <Number>4</Number>
      <ImageWrapper>
        <Image src={"/errorTomato.png"} width={228} height={282} alt="error" />
      </ImageWrapper>
      <Number>4</Number>
    </Wrapper>
  );
};

export default ErrorImage;
