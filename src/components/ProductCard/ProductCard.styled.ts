import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 264px;
  height: 228px;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 24px;
  /* padding: ${({ theme }) => theme.space[4]}; */
  padding-top: 32px;
  padding-right: 32px;
  padding-left: 24px;
  padding-bottom: 24px;
`;

export const ImageWrapper = styled.div`
  position: absolute;
  top: -38px;
  left: 20px;
  width: 116px;
  height: 114px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.input};
`;

export const Rating = styled.div`
  display: flex;
  align-self: flex-end;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 50px;

  svg {
    color: inherit;
    margin-right: ${({ theme }) => theme.space[2]};
  }
`;

export const Title = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;

export const Price = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSizes.s};
`;

export const Weight = styled.p`
  opacity: 0.5;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;
