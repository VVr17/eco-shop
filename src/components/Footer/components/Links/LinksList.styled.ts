import { theme } from "constants/theme";
import styled from "styled-components";

export const ChapterList = styled("ul")`
  display: flex;
  justify-content: space-between;
  column-gap: 140px;

  color: ${(p) => p.theme.colors.mainText};

  ${theme.mq.mobileOnly} {
    flex-direction: column;
    row-gap: 24px;
  }

  ${theme.mq.tabletOnly} {
    justify-content: space-around;
  }
`;

export const Chapter = styled("li")`
  ${theme.mq.mobileOnly} {
    padding-bottom: 24px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.07);
  }
`;

export const Title = styled("h3")`
  margin-bottom: 24px;

  font-size: 16px;
  line-height: 1;

  ${theme.mq.mobileOnly} {
    margin-bottom: 16px;
  }
`;

export const List = styled("ul")`
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  ${theme.mq.mobileOnly} {
    flex-direction: row;
    column-gap: 32px;
  }
`;

export const ListItem = styled("li")`
  font-size: 14px;
  line-height: 1.285;
`;
