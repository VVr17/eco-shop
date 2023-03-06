import styled from "styled-components";
import { css } from "styled-components";

export const BarWrapper = styled("div")`
  width: 100%;
  padding-top: 40px;
  padding-bottom: 40px;

  /* background-color: cyan; */
`;

export const DefaultBar = styled("div")`
  position: relative;
  width: 100%;
  height: 4px;
  background-color: ${(p) => p.theme.colors.input};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 25%;
    width: 25%;
    height: 100%;
    /* background-color: black; */
    border-left: 1px solid rgba(56, 54, 52, 0.2);
    border-right: 1px solid rgba(56, 54, 52, 0.2);
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 25%;
    height: 100%;
    /* background-color: red; */
    border-left: 1px solid rgba(56, 54, 52, 0.2);
  }
`;

export const RangeBar = styled("div")<{ value: number }>`
  position: absolute;
  height: 100%;
  width: ${(p) => p.value}%;
  background-color: ${(p) => p.theme.colors.secondaryAccent};
`;

export const Slider = styled("div")`
  position: absolute;
  top: 50%;
  right: 0;
  height: 20px;
  z-index: 1;
  transform: translate(50%, -50%);

  width: 16px;
  background-color: ${(p) => p.theme.colors.cardBackground};
  border-radius: 4px;
  border: 2px solid ${(p) => p.theme.colors.secondaryAccent};

  &::after {
    content: attr(data-value);
    position: absolute;
    top: -28px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 16px;
    color: ${(p) => p.theme.colors.secondaryAccent};
  }
`;

export const GraduationValue = styled("div")<{ pos: number }>`
  position: absolute;

  font-size: 16px;
  color: rgba(56, 54, 52, 0.6);

  top: 20px;

  ${({ pos }) => {
    if (pos <= 10) {
      return css`
        left: ${pos}%;
      `;
    }
    if (pos >= 90) {
      return css`
        right: ${100 - pos}%;
      `;
    }
    return css`
      left: ${pos}%;
      transform: translateX(-50%);
    `;
  }}
`;
