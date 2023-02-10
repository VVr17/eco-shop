import { FC } from "react";
import Chart from "../Chart";
import DiscountBar from "../DiscountBar";
import { DashboardCard } from "./Dashboard.styled";

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
      <Chart discountValue={discountValue} />

      <DiscountBar maxValue={maxDiscountingValue} value={cutomerCurrentValue} />
    </DashboardCard>
  );
};

export default Dashboard;
