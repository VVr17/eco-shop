import styled from "styled-components";

export const PriceBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.space[1]};
  color: ${({ theme }) => theme.colors.secondaryText};
`;

export const Field = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.secondaryText};
  text-transform: capitalize;

  :not(:last-of-type) {
    margin-right: ${({ theme }) => theme.space[3]};
  }

  input {
    margin-left: 12px;
    padding: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 68px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 10px;
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }
`;
