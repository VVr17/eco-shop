import styled from "styled-components";
import { theme } from "constants/theme";

export const HomeContainer = styled("div")`
  padding-top: 65px;
  padding-bottom: 65px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${theme.mq.desktop} {
    padding-top: 80px;
    padding-bottom: 80px;

    /* border-bottom: 1px solid rgba(56, 54, 52, 0.08); */
  }
`;
