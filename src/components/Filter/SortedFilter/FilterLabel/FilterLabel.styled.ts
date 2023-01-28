import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.input};
  border-radius: 10px;
`;

export const Label = styled.div`
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: ${({ theme }) => theme.space[3]};
`;

export const Type = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.secondaryText};
  margin-right: ${({ theme }) => theme.space[2]};
  text-transform: capitalize;
`;

export const Value = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  text-transform: capitalize;
`;
