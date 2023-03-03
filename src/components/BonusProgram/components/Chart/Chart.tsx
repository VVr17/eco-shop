import { FC } from "react";
import { CentralCircle, ChartWrapper, OutsideCircle } from "./Chart.styled";

interface IChartProps {
  discountValue: number;
}

const Chart: FC<IChartProps> = ({ discountValue }) => {
  return (
    <ChartWrapper>
      <OutsideCircle value={Number(discountValue)}></OutsideCircle>
      <CentralCircle>{discountValue}%</CentralCircle>
    </ChartWrapper>
  );
};

export default Chart;
