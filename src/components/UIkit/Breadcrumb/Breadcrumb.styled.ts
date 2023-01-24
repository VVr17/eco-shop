import { theme } from "constants/theme";
import styled from "styled-components";

export const BreadcrumbStyled = styled.div`
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.secondaryText};
  font-size: ${({ theme }) => theme.fontSizes.xxs};

  ${theme.mq.tablet} {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    margin-bottom: ${({ theme }) => theme.space[3]};
  }
`;
