import { theme } from "constants/theme";
import styled from "styled-components";
import { containerWidth } from "constants/constants";

export const HeaderContainer = styled.div`
  max-width: ${containerWidth[1]};
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-left: ${({ theme }) => theme.space[2]};
  padding-right: ${({ theme }) => theme.space[2]};

  ${theme.mq.tablet} {
    max-width: ${containerWidth[2]};
    padding-left: 24px;
    padding-right: 24px;
  }

  ${theme.mq.desktop} {
    max-width: ${containerWidth[3]};
    padding-left: ${({ theme }) => theme.space[3]};
    padding-right: ${({ theme }) => theme.space[3]};
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
