import { theme } from "constants/theme";
import styled from "styled-components";

export const FooterWrapper = styled("div")`
  display: flex;
  flex-direction: column-reverse;

  row-gap: 48px;

  ${theme.mq.desktop} {
    justify-content: space-between;
    flex-direction: row;
  }
`;
