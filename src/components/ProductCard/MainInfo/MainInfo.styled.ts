import styled from "styled-components";

export const TableInfo = styled.table`
  text-align: left;
  margin-bottom: ${({ theme }) => theme.space[4]};

  tr {
    height: 30px;
  }

  th {
    width: 110px;
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    font-size: ${({ theme }) => theme.fontSizes.xs};
    line-height: 1.43;
    color: ${({ theme }) => theme.colors.backButton};
    text-transform: capitalize;
  }

  td {
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    font-size: ${({ theme }) => theme.fontSizes.s};
    line-height: 1.38;
    color: ${({ theme }) => theme.colors.mainText};
    text-transform: capitalize;
  }
`;
