import styled from "styled-components";

export const IconButtonStyled = styled.button`
  margin: 0;
  padding: ${(p) => p.theme.space[2]};
  border: none;
  font: inherit;
  cursor: pointer;
  background-color: transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${(p) => p.theme.colors.mainText};
  background-color: ${({ theme }) => theme.colors.mainBackground};
  border-radius: 10px;
  outline: none;
  transition: background-color ${(p) => p.theme.transitionTiming};

  :hover {
    background-color: ${({ theme }) => theme.colors.hoverHeaderLink};
  }

  :disabled {
    opacity: 0.2;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;
