import styled from "styled-components";

export const LabelStyled = styled.div`
  position: absolute;
  top: 64px;
  right: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 12px;
  width: 69px;
  height: 28px;
  border-radius: 6px;
  transform: rotate(10deg);
  background-color: ${({ theme }) => theme.colors.secondaryAccent};
  color: ${({ theme }) => theme.colors.lightText};
`;
