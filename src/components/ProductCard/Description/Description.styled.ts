import styled from "styled-components";

export const Title = styled.p`
  margin-bottom: ${({ theme }) => theme.space[3]};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSizes.s};
  color: ${({ theme }) => theme.colors.mainText};
  line-height: 1.42;
`;
export const Text = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontSizes.s};
  color: ${({ theme }) => theme.colors.backButton};
  line-height: 1.76;
`;
