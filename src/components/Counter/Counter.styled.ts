import styled from "styled-components";

export const CounterStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 91px;
  height: 28px;
  border: 1px solid #edeae7;
  border-radius: 6px;
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  color: ${({ theme }) => theme.colors.mainText};

  button {
    width: 26px;
    height: 26px;
    background: none;
    border: none;
    cursor: pointer;
    color: inherit;
    font-family: inherit;
    font-weight: inherit;
    justify-content: center;
    align-items: center;
    display: flex;
    margin: 0;
    padding: 0;
    font-size: ${({ theme }) => theme.fontSizes.xxs};
  }

  input {
    color: inherit;
    font-family: inherit;
    font-weight: inherit;
    border: none;
    background: none;
    text-align: center;
    width: 28px;
    font-size: ${({ theme }) => theme.fontSizes.xxs};
  }

  span {
    width: 20px;
    overflow-x: hidden;
  }
`;
