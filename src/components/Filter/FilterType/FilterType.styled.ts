import styled from "styled-components";

export const Filter = styled.div`
  padding-top: ${({ theme }) => theme.space[4]};
  padding-bottom: ${({ theme }) => theme.space[4]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Title = styled.strong`
  display: block;
  margin-bottom: ${({ theme }) => theme.space[3]};
  text-transform: capitalize;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;
