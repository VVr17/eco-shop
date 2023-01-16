import { theme } from "constants/theme";
import styled from "styled-components";

export const ContainerStyled = styled.div`
  margin: 0 auto;
  width: 100%;
  padding-right: ${({ theme }) => theme.space[3]};
  padding-left: ${({ theme }) => theme.space[3]};

  ${theme.mq.mediumMobileOnly} {
    width: ${({ theme }) => theme.breakpoints[0]};
  }

  ${theme.mq.tablet} {
    width: ${({ theme }) => theme.breakpoints[1]};
  }

  ${theme.mq.desktop} {
    width: ${({ theme }) => theme.breakpoints[2]};
    padding-right: 135px;
    padding-left: 135px;
  }
`;
