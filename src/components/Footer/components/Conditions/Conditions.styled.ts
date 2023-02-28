import { theme } from "constants/theme";
import Link from "next/link";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  font-size: 13px;
  line-height: 1.23;
  color: rgba(56, 54, 52, 0.7);
  text-decoration: underline;

  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }
`;
