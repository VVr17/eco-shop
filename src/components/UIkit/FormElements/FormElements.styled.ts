import { theme } from "constants/theme";
import styled from "styled-components";

export const Form = styled("form")<{ width: string[] }>`
  /* width: 824px; */
  width: ${(p) => p.width[2]};
  color: ${(p) => p.theme.colors.mainText};

  ${theme.mq.mobileOnly} {
    /* width: 300px; */
    width: ${(p) => p.width[0]};
  }

  ${theme.mq.tabletOnly} {
    /* width: 500px; */
    width: ${(p) => p.width[1]};
  }
`;

export const Body = styled("div")`
  padding-top: 35px;
  padding-bottom: 35px;

  background-color: ${(p) => p.theme.colors.cardBackground};
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;

  ${theme.mq.desktop} {
    padding-top: 50px;
  }
`;

export const Footer = styled("div")`
  padding-top: 30px;
  padding-bottom: 35px;
  background-color: ${(p) => p.theme.colors.mainBackground};
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;

  ${theme.mq.desktop} {
    padding-bottom: 50px;
  }
`;

export const FormContainer = styled("div")`
  padding-left: 56px;
  padding-right: 56px;
  margin-left: auto;
  margin-right: auto;

  ${theme.mq.mobileOnly} {
    padding-left: 32px;
    padding-right: 32px;
  }
`;

export const Title = styled("h2")`
  margin-bottom: 24px;
  font-weight: 700;
  font-size: 40px;
  line-height: 1.2;

  ${theme.mq.mobileOnly} {
    font-size: 24px;
  }
`;

export const IconWrapper = styled("div")`
  cursor: pointer;
  position: absolute;
  right: 16px;
  bottom: 16px;
  width: 18px;
  height: 18px;
`;

export const ErrorMessage = styled("p")`
  padding-top: 3px;
  padding-left: ${(p) => p.theme.space[3]};

  font-size: ${(p) => p.theme.fontSizes.xs};

  color: ${(p) => p.theme.colors.secondaryAccent};
`;

export const Label = styled("label")`
  position: relative;
  font-size: 13px;
  line-height: 1.2;
  color: rgba(56, 54, 52, 0.8);

  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  /* row-gap: ${(p) => p.theme.space[2]}; */

  ${theme.mq.desktop} {
    flex-basis: calc((100% - ${(p) => p.theme.space[4]}) / 2);
  }
`;

export const RegisterLabel = styled(Label)`
  ${theme.mq.desktop} {
    flex-basis: calc((100% - ${(p) => p.theme.space[4]}) / 2);
  }
`;

export const LoginLabel = styled(Label)``;

export const Input = styled("input")`
  margin-top: ${(p) => p.theme.space[2]};
  padding: 14px 50px 14px 16px;
  font-size: 14px;
  line-height: 1.14;
  color: ${(p) => p.theme.colors.mainText};

  border: 1px solid ${(p) => p.theme.colors.input};
  border-radius: 10px;
  width: 100%;
  &:focus,
  &:focus-visible {
    outline: 1px solid ${(p) => p.theme.colors.accent};
  }
`;
