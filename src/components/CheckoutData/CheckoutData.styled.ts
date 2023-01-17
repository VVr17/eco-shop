import styled from "styled-components";

export const H3 = styled("h3")`
  margin-bottom: 24px;

  font-size: ${(p) => p.theme.fontSizes.m};
  line-height: 1.1;
  font-weight: ${(p) => p.theme.fontWeight.medium};
  color: ${(p) => p.theme.colors.mainText};
`;

export const FieldSet = styled("div")`
  padding-bottom: 56px;
  display: flex;
  flex-wrap: wrap;
  column-gap: ${(p) => p.theme.space[4]};
  row-gap: ${(p) => p.theme.space[3]};
`;

export const FieldWrapper = styled("div")`
  flex-basis: calc((100% - ${(p) => p.theme.space[4]}) / 2);
`;

export const Label = styled("label")`
  display: block;
  margin-bottom: ${(p) => p.theme.space[2]};
`;
