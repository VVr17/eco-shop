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

    ${theme.mq.tablet} {
      flex-basis: calc((100% - 16px) / 3);
      margin-top: 38px;
    }

    ${theme.mq.desktop} {
      flex-basis: calc((100% - 56px) / 3);
    }
  }
`;
