import { FC } from "react";

interface IProductSliderProps {
  title: string;
}

const ProductSlider: FC<IProductSliderProps> = ({ title }) => {
  return (
    <div>
      <h2>{title}</h2>
      ProductSlider
    </div>
  );
};

export default ProductSlider;
