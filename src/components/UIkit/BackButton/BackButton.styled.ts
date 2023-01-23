import styled from "styled-components";

export const BackButtonStyled = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-size: ${({ theme }) => theme.fontSizes.s};
  color: ${({ theme }) => theme.colors.backButton};
  line-height: 1.25;
  margin-bottom: ${({ theme }) => theme.space[3]};
  transition: color ${({ theme }) => theme.transitionTiming};

  :hover,
  :focus {
    color: ${({ theme }) => theme.colors.accent};
  }

  svg {
    margin-right: ${({ theme }) => theme.space[2]};
  }
`;
