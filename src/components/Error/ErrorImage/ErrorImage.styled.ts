import { theme } from "constants/theme";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.space[5]};
`;

export const Number = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.superBold};
  font-size: 100px;
  line-height: 100px;
  color: ${({ theme }) => theme.colors.secondaryAccent};

  ${theme.mq.tablet} {
    font-size: 200px;
    line-height: 200px;
  }
`;

export const ImageWrapper = styled.div`
  img {
    width: 118px;
    height: auto;

    ${theme.mq.tablet} {
      width: 228px;
      height: auto;
    }
  }
`;
