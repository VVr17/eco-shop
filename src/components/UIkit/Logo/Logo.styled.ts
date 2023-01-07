import { theme } from "constants/theme";
import styled from "styled-components";

export const LogoButton = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.mainBackground};
  border-radius: 10px;
  transition: background-color ${(p) => p.theme.transitionTiming};

  :hover,
  :focus {
    background-color: ${({ theme }) => theme.colors.hoverHeaderLink};
  }

  svg {
    width: 83px;
    height: 32px;

    ${theme.mq.tablet} {
      width: 93px;
      height: 36px;
    }
  }
`;
