import { theme } from "constants/theme";
import styled from "styled-components";

export const Title = styled.strong`
  color: ${({ theme }) => theme.colors.mainText};
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 1.41;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.accent};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  svg {
    color: inherit;

    ${theme.mq.mobileOnly} {
      margin-right: ${({ theme }) => theme.space[2]};
    }

    ${theme.mq.tablet} {
      :last-of-type {
        margin-right: ${({ theme }) => theme.space[2]};
      }
    }
  }
`;

export const Number = styled.p`
  margin-right: 12px;
`;

export const ReviewsQuantity = styled.p`
  color: ${({ theme }) => theme.colors.secondaryText};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;

export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[2]};
`;

export const Review = styled.li`
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  padding: 24px;
`;

export const Name = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.space[3]};
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.backButton};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  margin-bottom: ${({ theme }) => theme.space[2]};
`;

export const Date = styled.p`
  color: ${({ theme }) => theme.colors.secondaryText};
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  line-height: 2;
`;
