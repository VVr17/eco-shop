import { FC } from "react";
import {
  BarWrapper,
  DefaultBar,
  GraduationValue,
  RangeBar,
  Slider,
} from "./DiscountBar.styled";

interface IDiscountBarProps {
  maxValue: number;
  value: number;
}

const DiscountBar: FC<IDiscountBarProps> = ({ maxValue, value }) => {
  const barValue =
    value >= maxValue ? 100 : Math.trunc((value / maxValue) * 100);

  return (
    <BarWrapper>
      <DefaultBar>
        <RangeBar value={barValue}>
          <Slider data-value={`$${Math.trunc(value)}`} />
        </RangeBar>
        <GraduationValue pos={0}>0%</GraduationValue>
        <GraduationValue pos={50}>10%</GraduationValue>
        <GraduationValue pos={100}>20%</GraduationValue>
      </DefaultBar>
    </BarWrapper>
  );
};

export default DiscountBar;
