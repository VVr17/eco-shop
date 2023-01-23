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
    margin-right: ${({ theme }) => theme.space[2]};
  }

  :last-of-type {
    margin-right: ${({ theme }) => theme.space[3]};
  }

  input {
    margin-left: ${({ theme }) => theme.space[1]};
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

export const SubmitButton = styled.button`
  margin: 0;
  margin-left: auto;
  padding-top: ${({ theme }) => theme.space[2]};
  padding-bottom: ${({ theme }) => theme.space[2]};
  padding-left: ${({ theme }) => theme.space[3]};
  padding-right: ${({ theme }) => theme.space[3]};
  border: none;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  color: ${({ theme }) => theme.colors.mainText};
  text-transform: capitalize;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.input};
  border-radius: 10px;
`;
