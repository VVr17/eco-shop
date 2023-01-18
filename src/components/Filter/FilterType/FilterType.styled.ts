import styled from "styled-components";

export const Title = styled.strong`
  display: block;
  margin-bottom: ${({ theme }) => theme.space[3]};
  text-transform: capitalize;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;
