import { theme } from "constants/theme";
import Link from "next/link";
import styled from "styled-components";

export const LogoWrapper = styled(Link)`
  margin: 0;
  padding: 0;
  border: none;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.mainBackground};
  border-radius: 10px;
  transition: background-color ${(p) => p.theme.transitionTiming};
  /* padding: ${(p) => p.theme.space[1]}; */

  :hover,
  :focus {
    background-color: ${({ theme }) => theme.colors.hoverHeaderLink};
  }

  img {
    width: 83px;
    height: 32px;

    ${theme.mq.tablet} {
      width: 93px;
      height: 36px;
    }
  }
`;
