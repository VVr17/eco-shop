import Link from "next/link";
import styled from "styled-components";

export const Form = styled("form")`
  width: 824px;
  color: ${(p) => p.theme.colors.mainText};
`;

export const Main = styled("div")`
  padding-top: 50px;
  padding-bottom: 35px;

  background-color: ${(p) => p.theme.colors.cardBackground};
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
`;

export const Footer = styled("div")`
  padding-top: 30px;
  padding-bottom: 50px;
  background-color: ${(p) => p.theme.colors.mainBackground};
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
`;

export const FormContainer = styled("div")`
  padding-left: 56px;
  padding-right: 56px;
`;

export const Title = styled("h2")`
  margin-bottom: 24px;
  font-weight: 700;
  font-size: 40px;
  line-height: 1.2;
`;

export const Fields = styled("div")`
  display: flex;
  flex-wrap: wrap;
  column-gap: ${(p) => p.theme.space[4]};
  row-gap: ${(p) => p.theme.space[3]};
`;

export const Label = styled("label")`
  font-size: 13px;
  line-height: 1.2;
  color: rgba(56, 54, 52, 0.8);

  display: flex;
  flex-direction: column;
  row-gap: ${(p) => p.theme.space[2]};

  flex-basis: calc((100% - ${(p) => p.theme.space[4]}) / 2);
`;

export const Input = styled("input")`
  padding: 14px 50px 14px 16px;
  font-size: 14px;
  line-height: 1.14;
  color: ${(p) => p.theme.colors.mainText};

  border: 1px solid ${(p) => p.theme.colors.input};
  border-radius: 10px;
`;

export const ToolBar = styled("div")`
  position: relative;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  column-gap: ${(p) => p.theme.space[4]};

  &:after {
    content: "or";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    font-size: 13px;
    line-height: 1.2;
    color: rgba(56, 54, 52, 0.8);
  }
`;

export const SubmitWrapper = styled("div")`
  flex-basis: calc((100% - ${(p) => p.theme.space[4]}) / 2);
`;

export const Socials = styled("div")`
  display: flex;
  align-items: center;
  column-gap: 16px;
  flex-basis: calc((100% - ${(p) => p.theme.space[4]}) / 2);
`;

export const ToLogin = styled("div")`
  display: flex;
  justify-content: center;
  column-gap: ${(p) => p.theme.space[3]};

  margin-top: 32px;
  font-size: 15px;
  line-height: 1.067;
`;

export const ToLoginText = styled("p")``;

export const ToLoginLink = styled(Link)`
  text-decoration: underline;
`;

export const DatePickerInput = styled("input")`
  /* display: block; */
  width: 100%;
  padding: 14px 50px 14px 16px;
  font-size: 14px;
  line-height: 1.14;
  color: ${(p) => p.theme.colors.mainText};

  border: 1px solid ${(p) => p.theme.colors.input};
  border-radius: 10px;
`;
