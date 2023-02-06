import styled from "styled-components";

export const StockCheck = styled.div<{ inStock: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 116px;
  padding-left: ${({ theme }) => theme.space[3]};
  padding-right: ${({ theme }) => theme.space[3]};
  padding-top: 11px;
  padding-bottom: 11px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme, inStock }) =>
    inStock ? theme.colors.accent : theme.colors.backButton};

  svg {
    margin-left: ${({ theme }) => theme.space[2]};
  }
`;

export const Delivery = styled.p`
  font-size: ${({ theme }) => theme.colors.secondaryText};
  color: ${({ theme }) => theme.colors.secondaryText};
`;
