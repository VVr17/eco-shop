import styled from "styled-components";
import { theme } from "constants/theme";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.cardBackground};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 24px;
  /* padding: ${({ theme }) => theme.space[4]}; */
  /* margin-top: 16px; */
  padding-top: 24px;
  padding-right: 24px;
  padding-left: 16px;
  padding-bottom: 16px;

  ${theme.mq.tablet} {
    /* margin-top: 38px; */
    padding-top: 32px;
    padding-right: 32px;
    padding-left: 24px;
    padding-bottom: 24px;
  }
`;

export const ImageWrapper = styled.div`
  position: absolute;
  top: -16px;
  left: 16px;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.input};

  ${theme.mq.tablet} {
    width: 116px;
    height: 114px;
    top: -38px;
    left: 20px;
  }
`;

export const Rating = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  color: ${({ theme }) => theme.colors.accent};
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-bottom: 24px;

  ${theme.mq.tablet} {
    flex-direction: row;
    margin-bottom: 68px;
  }

  svg {
    color: inherit;
    align-self: center;

    ${theme.mq.tablet} {
      margin-right: ${({ theme }) => theme.space[2]};
    }
  }
`;

export const Title = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  margin-bottom: 12px;
  max-height: 38px;
  overflow-y: hidden;

  ${theme.mq.tablet} {
    margin-bottom: 24px;
  }
`;

export const PreviousPrice = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  text-decoration-line: line-through;
  opacity: 0.9;
  ${theme.mq.mobileOnly} {
    margin-left: ${({ theme }) => theme.space[1]};
  }
`;

export const Price = styled.p<{ isSale: boolean }>`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSizes.s};
  color: ${({ theme, isSale }) =>
    isSale ? theme.colors.secondaryAccent : theme.colors.mainText};
`;

export const Weight = styled.p`
  opacity: 0.5;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontSizes.xxs};
`;
