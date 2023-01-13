import { theme } from "constants/theme";
import styled from "styled-components";

export const ModalBody = styled("div")`
  &::-webkit-scrollbar {
    width: 0;
    background-color: ${(p) => p.theme.colors.input};
  }

  /* &::-webkit-scrollbar-track {
    background: #f1f1f1;
  } */

  &::-webkit-scrollbar-thumb {
    background-color: ${(p) => p.theme.colors.mainText};
    border-radius: 2px;
  }

  ${theme.mq.mobileOnly} {
    overflow-y: auto;
    height: 100%;
  }

  ${theme.mq.tabletOnly} {
    overflow-y: auto;
    height: 100%;
  }
`;

export const CartList = styled("ul")`
  margin-top: 24px;
  padding-right: 32px;
  max-height: 400px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 4px;
    background-color: ${(p) => p.theme.colors.input};
  }

  /* &::-webkit-scrollbar-track {
    background: #f1f1f1;
  } */

  &::-webkit-scrollbar-thumb {
    background-color: ${(p) => p.theme.colors.mainText};
    border-radius: 2px;
  }

  ${theme.mq.tabletOnly} {
    padding-right: 0;
    max-height: initial;
    overflow-y: visible;
  }

  ${theme.mq.mobileOnly} {
    padding-right: 0;
    max-height: initial;
    overflow-y: visible;
  }
`;

export const CartListItem = styled("li")`
  :not(:first-of-type) {
    padding-top: ${({ theme }) => theme.space[3]};
  }

  :not(:last-of-type) {
    padding-bottom: ${({ theme }) => theme.space[3]};
    border-bottom: 1px solid ${(p) => p.theme.colors.input};
  }
`;
