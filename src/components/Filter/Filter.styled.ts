import styled from "styled-components";

export const Title = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.l};
`;

export const FilterThumb = styled.li`
  padding-top: ${({ theme }) => theme.space[4]};
  padding-bottom: ${({ theme }) => theme.space[4]};

  :not(:last-of-type) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }
`;
