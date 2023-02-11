import { theme } from "constants/theme";
import styled from "styled-components";

export const DashboardCard = styled("div")`
  width: 570px;
  /* height: 320px; */

  padding: 45px 45px 24px 45px;

  border-radius: 24px;
  background-color: ${(p) => p.theme.colors.cardBackground};
`;

export const MetaChartWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */

  ${theme.mq.tablet} {
    flex-direction: row;
    align-items: center;
  }
`;

export const Meta = styled("div")`
  margin-left: 45px;
  flex-grow: 1;
`;

export const Text = styled("p")`
  display: flex;
  justify-content: space-between;
`;

export const TextItem = styled("span")``;
