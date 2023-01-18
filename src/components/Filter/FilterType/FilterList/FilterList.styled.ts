import styled from "styled-components";

export const List = styled.ul`
  max-height: 180px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 4px;
    background-color: ${(p) => p.theme.colors.input};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(p) => p.theme.colors.mainText};
    border-radius: 2px;
  }

  li {
    padding-left: 1px;
    padding-right: 1px;

    :not(:last-of-type) {
      margin-bottom: 12px;
    }
  }
`;
