import { theme } from "constants/theme";
import styled from "styled-components";

export const Text = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSizes.s};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.space[4]};

  ${theme.mq.tablet} {
    font-size: 32px;
  }
`;
