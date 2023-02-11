import { FC } from "react";
import Chart from "../Chart";
import DiscountBar from "../DiscountBar";
import {
  DashboardCard,
  Meta,
  MetaChartWrapper,
  Text,
  TextItem,
} from "./Dashboard.styled";

interface IDashboardProps {
  maxDiscountingValue: number;
  cutomerCurrentValue: number;
}

const DiscountOptionsNumber = 4;
const discounts = [0, 5, 10, 15, 20];

const Dashboard: FC<IDashboardProps> = ({
  maxDiscountingValue,
  cutomerCurrentValue,
}) => {
  const pointValue = maxDiscountingValue / DiscountOptionsNumber;
  const discountCalcIndex = Math.trunc(cutomerCurrentValue / pointValue);

  const discountLevel =
    discountCalcIndex > discounts.length - 1
      ? discounts.length - 1
      : discountCalcIndex;
  const discountValue = discounts[discountLevel];
  const notEnoughTo = discounts[discountLevel + 1];
  const notEnoughToValue = Math.trunc(
    (discountLevel + 1) * pointValue - cutomerCurrentValue
  );
  return (
    <DashboardCard>
      <MetaChartWrapper>
        <Chart discountValue={discountValue} />
        <Meta>
          <Text>
            <TextItem>Level:</TextItem>
            <TextItem>{discountLevel}</TextItem>
          </Text>
          <Text>
            <TextItem>Not enough to {notEnoughTo}%:</TextItem>
            <TextItem>${notEnoughToValue}</TextItem>
          </Text>
        </Meta>
      </MetaChartWrapper>

      <DiscountBar maxValue={maxDiscountingValue} value={cutomerCurrentValue} />
    </DashboardCard>
  );
};

export default Dashboard;
