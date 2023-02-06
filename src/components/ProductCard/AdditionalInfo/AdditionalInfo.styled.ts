import styled from "styled-components";

export const AdditionalInfoList = styled.ul`
  margin-bottom: ${({ theme }) => theme.space[4]};

  li {
    :first-of-type {
      border-top: 1px solid ${({ theme }) => theme.colors.cartBorder};
    }
  }

  button {
    margin: 0;
    border: none;
    font: inherit;
    cursor: pointer;
    width: 100%;
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: ${({ theme }) => theme.space[3]};
    padding-bottom: ${({ theme }) => theme.space[3]};
    border-bottom: 1px solid ${({ theme }) => theme.colors.cartBorder};
    font-size: ${({ theme }) => theme.fontSizes.s};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }
`;
