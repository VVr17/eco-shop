import styled from "styled-components";

export const IconButtonStyled = styled.button`
  margin: 0;
  padding-left: ${(p) => p.theme.space[3]};
  padding-right: ${(p) => p.theme.space[3]};
  padding-top: ${(p) => p.theme.space[2]};
  padding-bottom: ${(p) => p.theme.space[2]};
  border: none;
  font: inherit;
  cursor: pointer;
  background-color: transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${(p) => p.theme.colors.mainText};
  border-radius: 10px;
  outline: none;
  transition: background-color ${(p) => p.theme.transitionTiming};

  :disabled {
    opacity: 0.2;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;
