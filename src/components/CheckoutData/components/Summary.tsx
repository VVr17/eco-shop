import { FC } from "react";
import {
  SummaryCostItem,
  SummaryCostName,
  SummaryCostsList,
  SummaryCostValue,
  SummaryHeading,
  SummaryTotalWrapper,
} from "./CheckoutData.styled";

interface ISummaryProps {
  currency: string;
  list: { label: string; cost: number }[];
}

const Summary: FC<ISummaryProps> = ({ currency, list }) => {
  const total = list.reduce((acc, val) => acc + val.cost, 0);

  return (
    <>
      <SummaryHeading>Your order:</SummaryHeading>
      <SummaryCostsList>
        {list.map(({ label, cost }) => (
          <SummaryCostItem key={label}>
            <SummaryCostName>{label}:</SummaryCostName>
            <SummaryCostValue>{`${currency}${cost.toFixed(
              2
            )}`}</SummaryCostValue>
          </SummaryCostItem>
        ))}
      </SummaryCostsList>
      <SummaryTotalWrapper>
        <SummaryCostName>Total:</SummaryCostName>
        <SummaryCostValue>{`${currency}${total.toFixed(2)}`}</SummaryCostValue>
      </SummaryTotalWrapper>
    </>
  );
};

export default Summary;
