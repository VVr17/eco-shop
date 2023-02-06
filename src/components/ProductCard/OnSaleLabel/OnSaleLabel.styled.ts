import { theme } from "constants/theme";
import styled from "styled-components";

export const LabelStyled = styled.div`
  position: absolute;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 8px;
  width: 48px;
  height: 24px;
  border-radius: 6px;
  transform: rotate(10deg);
  background-color: ${({ theme }) => theme.colors.secondaryAccent};
  color: ${({ theme }) => theme.colors.lightText};

  top: 0;
  right: 0;

  ${theme.mq.tablet} {
    width: 69px;
    height: 28px;
    font-size: ${({ theme }) => theme.fontSizes.xxs};
  }
`;
