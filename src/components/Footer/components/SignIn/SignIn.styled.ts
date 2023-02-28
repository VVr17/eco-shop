import { theme } from "constants/theme";
import styled from "styled-components";

export const SignInWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  row-gap: 24px;

  ${theme.mq.tabletOnly} {
    flex-direction: row;
    column-gap: 50px;
    align-items: center;
    /* align-self: center; */
  }
`;

export const Title = styled("h3")`
  font-size: 16px;
  line-height: 1;
  color: ${(p) => p.theme.colors.mainText};
`;
