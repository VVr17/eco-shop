import { theme } from "constants/theme";
import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: ${({ theme }) => theme.space[3]};
  column-gap: ${({ theme }) => theme.space[2]};

  ${theme.mq.desktop} {
    row-gap: ${({ theme }) => theme.space[4]};
    column-gap: 28px;
  }

  li {
    flex-basis: calc((100% - 8px) / 2);
    margin-top: 16px;
    border: 1px solid ${({ theme }) => theme.colors.cardBackground};
    box-shadow: ${({ theme }) => theme.boxShadow};
    border-radius: 24px;

    ${theme.mq.tablet} {
      flex-basis: calc((100% - 16px) / 3);
      margin-top: 38px;
    }

    ${theme.mq.desktop} {
      flex-basis: calc((100% - 56px) / 3);
    }

    :hover {
      border-color: ${({ theme }) => theme.colors.accent};
      transition: color ${({ theme }) => theme.transitionTiming};
    }
  }
`;
