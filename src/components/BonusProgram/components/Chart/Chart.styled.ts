import styled from "styled-components";

export const ChartWrapper = styled("div")`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 160px;
  height: 160px;

  &::before,
  &::after {
    content: "";
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform-origin: center;
    transform: translate(-50%, -50%);
    background-color: #ffffff;
  }

  &::before {
    width: 8px;
    height: 100%;
  }

  &::after {
    width: 100%;
    height: 8px;
  }
`;

export const OutsideCircle = styled("div")<{ value: number }>`
  width: 160px;
  height: 160px;

  position: absolute;
  z-index: 0;
  transform-origin: center;

  transform: rotate(-45deg);

  border-radius: 50%;

  border: 6px solid;

  border-right-color: rgba(
    228,
    89,
    89,
    ${({ value }) => (value >= 5 ? 1 : 0.2)}
  );
  border-bottom-color: rgba(
    228,
    89,
    89,
    ${({ value }) => (value >= 10 ? 1 : 0.2)}
  );
  border-left-color: rgba(
    228,
    89,
    89,
    ${({ value }) => (value >= 15 ? 1 : 0.2)}
  );
  border-top-color: rgba(
    228,
    89,
    89,
    ${({ value }) => (value === 20 ? 1 : 0.2)}
  );
`;

export const CentralCircle = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(p) => p.theme.colors.mainBackground};
  font-size: 32px;

  width: 120px;
  height: 120px;

  position: absolute;
  z-index: 3;
  transform-origin: center;

  border-radius: 50%;

  background-color: rgba(228, 89, 89, 0.9); ;
`;
