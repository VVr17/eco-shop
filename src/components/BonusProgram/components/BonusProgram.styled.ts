import styled from "styled-components";
import { theme } from "constants/theme";

export const BonusProgramContainer = styled("div")`
  width: 100%;

  ${theme.mq.tabletOnly} {
    width: 570px;
  }
`;

export const BlockWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${theme.mq.desktop} {
    flex-direction: row;
    align-items: center;
  }
`;
