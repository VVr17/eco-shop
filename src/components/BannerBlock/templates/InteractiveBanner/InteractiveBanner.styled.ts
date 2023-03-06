import { theme } from "constants/theme";
import styled from "styled-components";

export const Article = styled("article")<{
  backgroundColor: string;
  backgroundImage: string;
}>`
  width: 100%;
  height: 100%;
  padding: 32px;

  border-radius: 24px;

  background: linear-gradient(
      to right,
      ${({ backgroundColor }) => backgroundColor + "cc"},
      ${({ backgroundColor }) => backgroundColor + "cc"}
    ),
    url(${({ backgroundImage }) => backgroundImage});

  background-repeat: no-repeat;
  background-color: ${({ backgroundColor }) => backgroundColor};
  background-position: right 0 bottom -5px;
  background-size: 80%;

  ${theme.mq.desktop} {
    padding: 80px 440px 80px 130px;
    background-image: url(${({ backgroundImage }) => backgroundImage});
    background-size: contain;
  }
`;

export const Meta = styled("div")`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Title = styled("h1")<{ color: string }>`
  color: ${({ color }) => color};

  line-height: 1.21;
  font-size: 36px;
  ${theme.mq.desktop} {
    font-size: 56px;
  }
`;

export const Text = styled("p")<{ color: string }>`
  color: ${({ color }) => color};
  font-size: 18px;
  line-height: 1.4;
  font-weight: 600;

  ${theme.mq.tablet} {
    font-size: 20px;
  }
`;
