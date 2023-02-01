import styled from "styled-components";

export const Label = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
export const CheckboxWrapper = styled.div<{ hasLabel: boolean }>`
  display: inline-block;
  vertical-align: middle;
  font-size: 0;
  padding: ${(p) => p.theme.space[1]}px;
  margin-right: ${({ theme, hasLabel }) => (hasLabel ? theme.space[3] : 0)};
`;

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

// Hide checkbox visually but remain accessible to screen readers.
export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const StyledCheckbox = styled.div<{
  checked: boolean;
}>`
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: ${(p) =>
    p.checked ? p.theme.colors.accent : p.theme.colors.cardBackground};
  border: 1px solid
    ${(p) => (p.checked ? p.theme.colors.accent : p.theme.colors.input)};
  box-shadow: 0px 5px 10px -5px rgba(56, 54, 52, 0.1);
  border-radius: 5px;
  transition: all 150ms;
  transition: background-color 250ms ${(p) => p.theme.transitionTiming},
    border-color 250ms ${(p) => p.theme.transitionTiming};

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 1px ${(p) => p.theme.colors.accent};
  }

  ${Icon} {
    visibility: ${(p) => (p.checked ? "visible" : "hidden")};
  }
`;
