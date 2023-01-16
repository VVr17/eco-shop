import { theme } from "constants/theme";
import styled from "styled-components";
import { containerWidth } from "constants/constants";

export const HeaderContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  padding-right: ${({ theme }) => theme.space[3]};
  padding-left: ${({ theme }) => theme.space[3]};

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-left: ${({ theme }) => theme.space[3]};
  padding-right: ${({ theme }) => theme.space[3]};

  ${theme.mq.mediumMobileOnly} {
    width: ${({ theme }) => theme.breakpoints[0]};
  }

  ${theme.mq.tablet} {
    width: ${({ theme }) => theme.breakpoints[1]};
  }

  ${theme.mq.desktop} {
    width: ${({ theme }) => theme.breakpoints[2]};
    padding-right: 48px;
    padding-left: 48px;
  }
`;

export const LeftSideContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[3]};

  ${theme.mq.desktop} {
    gap: ${({ theme }) => theme.space[4]};
  }
`;

export const RightSideContainer = styled.ul`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[3]};

  ${theme.mq.desktop} {
    gap: ${({ theme }) => theme.space[4]};
  }
`;
