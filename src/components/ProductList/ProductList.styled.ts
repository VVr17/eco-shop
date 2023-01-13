import { theme } from "constants/theme";
import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: ${({ theme }) => theme.space[3]};
  column-gap: ${({ theme }) => theme.space[2]};

  ${theme.mq.desktop} {
    max-width: 836px; //TODO:check after making filter
    row-gap: ${({ theme }) => theme.space[4]};
    column-gap: 28px;
  }

  li {
    flex-basis: calc((100% - 8px) / 2);

    ${theme.mq.tablet} {
      flex-basis: calc((100% - 16px) / 3);
    }

    ${theme.mq.desktop} {
      flex-basis: calc((100% - 56px) / 3);
    }
  }
`;
