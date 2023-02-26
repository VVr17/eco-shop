import { theme } from "constants/theme";
import styled from "styled-components";

export const AboutWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  row-gap: 16px;

  ${theme.mq.mobileOnly} {
    align-items: center;
  }

  ${theme.mq.desktop} {
    width: 165px;
    row-gap: 20px;
  }
`;

export const Company = styled("div")`
  display: flex;
  flex-direction: column;
  row-gap: 16px;

  ${theme.mq.mobileOnly} {
    align-items: center;
  }

  ${theme.mq.tabletOnly} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const CompanyName = styled("p")`
  /* margin-top: 20px; */
  font-size: 14px;
  line-height: 1.43;
  color: rgba(56, 54, 52, 0.8);
`;

export const Info = styled("div")`
  display: flex;

  ${theme.mq.mobileOnly} {
    flex-direction: column;
    align-items: center;
    row-gap: 16px;
  }

  ${theme.mq.tabletOnly} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Copyright = styled("p")`
  /* margin-top: 20px; */
  font-size: 14px;
  line-height: 1.29;
  color: rgba(56, 54, 52, 0.5);
`;
