import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  width: 264px;
  height: 266px;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 24px;
  padding-top: 96px;
  padding-left: 24px;
  padding-right: 24px;
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

export const Title = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;
