import { theme } from "constants/theme";
import styled from "styled-components";

export const SignUpWrapper = styled("div")`
  width: 100%;
  margin-top: 24px;

  ${theme.mq.mobileOnly} {
    /* width: 100%; */
  }

  ${theme.mq.tabletOnly} {
    /* width: 570px; */
  }

  ${theme.mq.desktop} {
    margin-left: 130px;
    margin-top: 0;
  }
`;

export const Attention = styled("strong")`
  font-weight: 700;
  font-size: ${(p) => p.theme.fontSizes.l};
  line-height: 1.5;
`;

export const ButtonWrapper = styled("div")`
  width: 100%;

  ${theme.mq.tablet} {
    width: 170px;
  }
`;

export const Text = styled("p")`
  margin-top: ${(p) => p.theme.space[3]};
  font-size: 18px;
  line-height: 1.667;
`;
