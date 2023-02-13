import { theme } from "constants/theme";
import Link from "next/link";
import styled from "styled-components";

export const TitleBar = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 40px;

  ${theme.mq.desktop} {
    margin-bottom: 59px;
  }
`;

export const Title = styled("h2")`
  width: 100%;
  margin: 0;
  display: flex;
  align-items: center;

  font-size: ${(p) => p.theme.fontSizes.xl};
  line-height: 1.2;

  ${theme.mq.mobileOnly} {
    font-size: ${(p) => p.theme.fontSizes.l};
  }
`;

export const IconWrapper = styled("span")`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 30px;

  ${theme.mq.mobileOnly} {
    height: 32px;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  column-gap: 12px;

  font-size: 18px;
  line-height: 1.111;

  flex-shrink: 0;

  transition: color ${(p) => p.theme.transitionTiming};
  &:hover {
    color: ${(p) => p.theme.colors.accent};
  }

  ${theme.mq.mobileOnly} {
    display: none;
  }
`;
