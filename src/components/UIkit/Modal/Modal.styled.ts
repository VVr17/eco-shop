import Box from "components/Box";
import styled from "styled-components";
import { theme } from "constants/theme";

export const ModalContainer = styled("div")`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;

  /* width: 824px; */
  /* height: 564px; */
  border-radius: 24px;
  /* padding: 50px 56px; */

  background-color: ${(p) => p.theme.colors.cardBackground};
  box-shadow: 0px 24px 48px -12px rgba(56, 54, 52, 0.08);

  max-height: 100%;
  /* ${theme.mq.tabletOnly} {
    max-height: 100%;
  } */
`;

export const TooltipContainer = styled("div")<{
  posX: number;
  posY: number;
  width: string;
}>`
  position: absolute;
  width: ${(p) => p.width};

  top: calc(${(p) => p.posY}px + 10px - 1px);
  left: calc(${(p) => p.posX}px - ${(p) => p.width} + 60px);

  z-index: 999;

  border-radius: 24px;
  padding: 24px;

  border: 1px solid ${(p) => p.theme.colors.input};
  background-color: ${(p) => p.theme.colors.cardBackground};

  ${theme.mq.tabletOnly} {
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    height: 80%;
  }

  ${theme.mq.mobileOnly} {
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    height: 80%;
  }

  &::after {
    ${theme.mq.desktop} {
      content: "";
      position: absolute;
      top: 0;
      right: 60px;
      transform: translateY(calc(-50% - 1px)) rotate(45deg);

      width: 10px;
      height: 10px;

      border-left: 1px solid ${(p) => p.theme.colors.input};
      border-left: 1px solid ${(p) => p.theme.colors.input};
      background-color: white;
    }
  }
`;
