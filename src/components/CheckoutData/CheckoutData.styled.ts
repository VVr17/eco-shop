import { theme } from "constants/theme";
import styled from "styled-components";
import { justifyContent } from "styled-system";

export const H3 = styled("h3")`
  margin-bottom: 24px;

  font-size: ${(p) => p.theme.fontSizes.m};
  line-height: 1.1;
  font-weight: ${(p) => p.theme.fontWeight.medium};
  color: ${(p) => p.theme.colors.mainText};
`;

export const FieldSet = styled("div")`
  padding-bottom: 56px;
  display: flex;
  flex-wrap: wrap;
  column-gap: ${(p) => p.theme.space[4]};
  row-gap: ${(p) => p.theme.space[3]};
`;

export const FieldWrapper = styled("div")`
  flex-basis: calc((100% - ${(p) => p.theme.space[4]}) / 2);
`;

export const Label = styled("label")`
  display: block;
  margin-bottom: ${(p) => p.theme.space[2]};
`;

export const Input = styled("input")`
  display: block;
  padding: 0;
  margin: 0;
  border: none;

  width: 100%;
  padding: 14px 16px;
  font-size: ${(p) => p.theme.fontSizes.xs};
  line-height: 1.142;
  color: ${(p) => p.theme.colors.mainText};

  border: 1px solid ${(p) => p.theme.colors.input};
  border-radius: 10px;

  &:focus,
  &:focus-visible {
    border: none;
    outline: 1px solid ${(p) => p.theme.colors.accent};
  }
`;

export const PaymentFieldWrapper = styled("div")`
  display: flex;
  column-gap: ${(p) => p.theme.space[4]};
  flex-basis: calc((100% - ${(p) => p.theme.space[4]}) / 2);
`;

export const PaymentMethodList = styled("ul")`
  margin-bottom: 22px;
`;

export const PaymentMethodItem = styled("li")`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 16px 0;

  border-bottom: 1px solid rgba(56, 54, 52, 0.08);

  &:last-child {
    border-bottom: none;
  }
`;

export const PaymentLogoWrapper = styled("div")`
  display: flex;
  align-items: center;
  column-gap: 17px;
`;

export const PaymentHeading = styled("div")`
  margin-bottom: ${(p) => p.theme.space[2]};

  font-size: ${(p) => p.theme.fontSizes.m};
  line-height: 1.1;
  font-weight: ${(p) => p.theme.fontWeight.medium};
  color: ${(p) => p.theme.colors.mainText};
`;

//------------------------------------------------------
export const SummaryHeading = styled("h3")`
  margin-bottom: ${(p) => p.theme.space[4]};

  font-size: ${(p) => p.theme.fontSizes.m};
  line-height: 1.1;
  font-weight: ${(p) => p.theme.fontWeight.medium};
  color: ${(p) => p.theme.colors.mainText};
`;

export const SummaryCostsList = styled("ul")`
  color: rgba(56, 54, 52, 0.7);
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: 1.375;
  padding-bottom: ${(p) => p.theme.space[3]};

  border-bottom: 1px solid rgba(56, 54, 52, 0.1); ;
`;

export const SummaryCostItem = styled("li")`
  display: flex;
  justify-content: space-between;

  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const SummaryCostName = styled("span")``;

export const SummaryCostValue = styled("span")``;

export const SummaryTotalWrapper = styled("div")`
  display: flex;
  justify-content: space-between;

  margin-top: ${(p) => p.theme.space[3]};

  font-size: ${(p) => p.theme.fontSizes.m};
  font-weight: ${(p) => p.theme.fontWeight.bold};
  line-height: 1.1;
`;

//-------------------------------------------------------
export const CheckoutListWrapper = styled("div")<{ maxHeight: number }>`
  margin-top: 56px;
  padding-right: 16px;

  /* max-height: 600px; */
  max-height: ${(p) => (p.maxHeight ? p.maxHeight : 500)}px;
  /* height: 100%; */
  /* height: max-content; */

  overflow-y: auto;

  scrollbar-width: thin;

  &::-webkit-scrollbar {
    width: 4px;
    background-color: ${(p) => p.theme.colors.input};
  }

  /* &::-webkit-scrollbar-track {
    background: #f1f1f1;
  } */

  &::-webkit-scrollbar-thumb {
    background-color: ${(p) => p.theme.colors.mainText};
    border-radius: 2px;
  }

  ${theme.mq.tabletOnly} {
    padding-right: 0;
    max-height: initial;
    overflow-y: visible;
  }

  ${theme.mq.mobileOnly} {
    padding-right: 0;
    max-height: initial;
    overflow-y: visible;
  }
`;
