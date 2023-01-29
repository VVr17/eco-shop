import { theme } from "constants/theme";
import styled from "styled-components";

export const SortWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;

  ${theme.mq.mobileOnly} {
    margin-bottom: 24px;
    background-color: ${({ theme }) => theme.colors.input};
    padding-right: ${({ theme }) => theme.space[3]};
  }
`;

export const FilterButton = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-family: ${(p) => p.theme.fontFamily};
  font-weight: ${(p) => p.theme.fontWeight.semiBold};
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: 1.25;
  padding-top: ${(p) => p.theme.space[2]};
  padding-bottom: ${(p) => p.theme.space[2]};
  padding-right: ${(p) => p.theme.space[3]};
  background-color: transparent;

  ${theme.mq.mobileOnly} {
    padding-left: ${(p) => p.theme.space[3]};
  }
`;

export const Showed = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;
