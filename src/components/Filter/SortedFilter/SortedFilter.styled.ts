import styled from "styled-components";

export const Labels = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${({ theme }) => theme.space[3]}; ;
`;
