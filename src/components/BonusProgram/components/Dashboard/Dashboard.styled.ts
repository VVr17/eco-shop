import { theme } from "constants/theme";
import styled from "styled-components";

export const DashboardCard = styled("div")`
  flex-shrink: 0;
  width: 100%;

  padding: 45px 45px 24px 45px;

  border-radius: 24px;
  background-color: ${(p) => p.theme.colors.cardBackground};

  ${theme.mq.desktop} {
    width: 570px;
  }

  ${theme.mq.mobileOnly} {
    padding: 16px 32px;
  }
`;

export const MetaChartWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${theme.mq.tablet} {
    flex-direction: row;
  }
`;

export const Meta = styled("div")`
  margin-left: 45px;
  flex-grow: 1;

  font-size: 18px;
  line-height: 1.667;

  ${theme.mq.mobileOnly} {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 10px;
    margin-left: 0;
    display: flex;
    justify-content: space-between;

    font-size: 16px;
    line-height: 1.5;
  }
`;

export const Text = styled("p")`
  display: flex;
  justify-content: space-between;

  &:first-child {
    margin-bottom: ${(p) => p.theme.space[2]};
  }

  ${theme.mq.mobileOnly} {
    margin-left: 0;
    display: flex;
  }
`;

export const TextItem = styled("span")`
  ${theme.mq.mobileOnly} {
    &:first-child {
      margin-right: 16px;
    }
  }
`;
