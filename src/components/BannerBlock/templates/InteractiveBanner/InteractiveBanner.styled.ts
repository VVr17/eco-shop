import { theme } from "constants/theme";
import styled from "styled-components";

export const Article = styled("article")<{
  backgroundColor: string;
  backgroundImage: string;
}>`
  width: 100%;
  height: 100%;

  border-radius: 24px;
  /* background: linear-gradient(
      to right,
      rgba(237, 234, 231, 0.9),
      rgba(237, 234, 231, 0.9)
    ),
    url(${({ backgroundImage }) => backgroundImage}); */

  /* background-image: url(${({ backgroundImage }) => backgroundImage}); */

  background-repeat: no-repeat;
  background-color: ${({ backgroundColor }) => backgroundColor};
  background-position: right;
  background-size: 90%;

  ${theme.mq.desktop} {
    padding: 80px 440px 80px 130px;
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
  font-size: 56px;
  line-height: 1.21;
`;

export const Text = styled("p")<{ color: string }>`
  color: ${({ color }) => color};
  font-size: 20px;
  line-height: 1.4;
  /* font-weight: 600; */
`;
