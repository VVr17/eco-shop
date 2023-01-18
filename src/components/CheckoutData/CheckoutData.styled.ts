import styled from "styled-components";

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
`;

export const PaymentHeading = styled("div")`
  margin-bottom: ${(p) => p.theme.space[2]};

  font-size: ${(p) => p.theme.fontSizes.m};
  line-height: 1.1;
  font-weight: ${(p) => p.theme.fontWeight.medium};
  color: ${(p) => p.theme.colors.mainText};
`;
