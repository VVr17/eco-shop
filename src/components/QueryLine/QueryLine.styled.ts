import styled from "styled-components";

export const QueryStyled = styled.p`
  margin-bottom: ${({ theme }) => theme.space[3]};
  color: ${({ theme }) => theme.colors.secondaryText};
  font-size: ${({ theme }) => theme.fontSizes.xs}; ;
`;
