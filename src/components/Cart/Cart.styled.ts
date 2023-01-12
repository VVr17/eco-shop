import styled from "styled-components";

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
`;

export const CartListItem = styled("li")`
  border-bottom: 1px solid ${(p) => p.theme.colors.input};

  margin-bottom: 16px;
  &:last-child {
    margin-bottom: 0;
  }
`;
