import { FC } from "react";
import {
  Article,
  Meta,
  PromoCode,
  Text,
  Title,
  TitleWrapper,
} from "./PromoCodeBanner.styled";

interface IPromoCodeBannerProps {
  title: string;
  promocode: string;
  text: string;
  labelImage: string;
}

const PromoCodeBanner: FC<IPromoCodeBannerProps> = ({
  title,
  promocode,
  text,
  labelImage,
}) => {
  return (
    <Article labelImageUrl={labelImage}>
      <Meta>
        <TitleWrapper>
          <Title>{title}</Title>
          <PromoCode>{promocode}</PromoCode>
        </TitleWrapper>
        <Text>{text}</Text>
      </Meta>
    </Article>
  );
};

export default PromoCodeBanner;
