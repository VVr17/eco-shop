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
  const discountCalculation = Math.trunc(cutomerCurrentValue / pointValue);

  const discountValue =
    discounts[
      discountCalculation > discounts.length - 1
        ? DiscountOptionsNumber
        : discountCalculation
    ];

  return (
    <DashboardCard>
      <MetaChartWrapper>
        <Chart discountValue={discountValue} />
        <Meta>
          <Text>
            <TextItem>Level:</TextItem>
            <TextItem>1</TextItem>
          </Text>
          <Text>
            <TextItem>Not enough to 10%:</TextItem>
            <TextItem>$74</TextItem>
          </Text>
        </Meta>
      </MetaChartWrapper>

      <DiscountBar maxValue={maxDiscountingValue} value={cutomerCurrentValue} />
    </DashboardCard>
  );
};

export default Dashboard;
