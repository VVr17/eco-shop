import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const ImageWrapper = styled.div<{
  width: string;
  height: string;
}>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 50%;
  /* background-color: ${({ theme }) => theme.colors.input}; */
  margin-right: ${({ theme }) => theme.space[3]}; ;
`;

export const Title = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.s};
  margin-bottom: ${({ theme }) => theme.space[2]};
`;

export const Price = styled.p`
  margin-left: auto;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontSizes.xxs};
`;

export const RemoveButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 14px;
  height: 14px;
  background: none;
  border: none;
  cursor: pointer;
  color: inherit;
  font-family: inherit;
  font-weight: inherit;
  justify-content: center;
  align-items: center;
  display: flex;
  margin: 0;
  padding: 0;
  font-size: ${({ theme }) => theme.fontSizes.xxs};
`;
