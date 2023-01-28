import styled from "styled-components";

export const ButtonStyled = styled.button`
  margin: 0;
  padding: ${(p) => p.theme.space[2]};
  border: none;
  font: inherit;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${(p) => p.theme.colors.mainText};
  background-color: ${({ theme }) => theme.colors.mainBackground};
  border-radius: 10px;
  outline: none;
  transition: background-color ${(p) => p.theme.transitionTiming};
  text-decoration: underline;

  :hover {
    background-color: ${({ theme }) => theme.colors.input};
  }
`;
