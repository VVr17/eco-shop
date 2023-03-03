import { theme } from "constants/theme";
import Link from "next/link";
import styled from "styled-components";

export const Fields = styled("div")`
  display: flex;
  flex-wrap: wrap;
  column-gap: ${(p) => p.theme.space[4]};
  row-gap: ${(p) => p.theme.space[3]};
`;

export const ToolBar = styled("div")`
  position: relative;
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  /* justify-content: center; */
  column-gap: ${(p) => p.theme.space[4]};
  row-gap: ${(p) => p.theme.space[4]};

  &:after {
    content: "or";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    font-size: 13px;
    line-height: 1.2;
    color: rgba(56, 54, 52, 0.8);

    ${theme.mq.mobileOnly} {
      /* display: none; */
      top: 35%;
    }
  }

  ${theme.mq.desktop} {
    flex-direction: row;
  }
`;

export const SubmitWrapper = styled("div")`
  flex-basis: calc((100% - ${(p) => p.theme.space[4]}) / 2);

  ${theme.mq.tabletOnly} {
    flex-basis: 100%;
  }
`;

export const Socials = styled("div")`
  display: flex;
  align-items: center;
  column-gap: 16px;

  flex-basis: 100%;

  ${theme.mq.mobileOnly} {
    flex-direction: column;
    row-gap: 16px;
  }

  ${theme.mq.desktop} {
    flex-basis: calc((100% - ${(p) => p.theme.space[4]}) / 2);
  }
`;

export const ToLogin = styled("div")`
  display: flex;
  justify-content: center;
  column-gap: ${(p) => p.theme.space[3]};

  margin-top: 32px;
  font-size: 16px;
  line-height: 1.067;

  ${theme.mq.desktop} {
    font-size: 15px;
  }
`;

export const ToLoginText = styled("p")``;

export const ToLoginLink = styled("p")`
  cursor: pointer;
  text-decoration: underline;
`;

export const DatePickerInput = styled("input")`
  margin-top: ${(p) => p.theme.space[2]};
  width: 100%;
  padding: 14px 50px 14px 16px;
  font-size: 14px;
  line-height: 1.14;
  color: ${(p) => p.theme.colors.mainText};

  border: 1px solid ${(p) => p.theme.colors.input};
  border-radius: 10px;

  cursor: pointer;

  &:focus,
  &:focus-visible {
    outline: 1px solid ${(p) => p.theme.colors.accent};
  }

  &::after {
    content: FiCalendar;
  }

  /* ${theme.mq.mobileOnly} {
    padding: 11px 50px 11px 16px;
  } */
`;
