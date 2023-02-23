import { FC } from "react";

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
    <div>
      <div>
        <div>
          <h1>{title}</h1>
          <p>{promocode}</p>
        </div>
        <p>{text}</p>
      </div>
      <div>Ribbon Label image</div>
    </div>
  );
};

export default PromoCodeBanner;
