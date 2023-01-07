import { theme } from "constants/theme";
import styled from "styled-components";

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
