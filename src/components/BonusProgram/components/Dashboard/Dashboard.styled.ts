import styled from "styled-components";

export const DashboardCard = styled("div")`
  width: 570px;
  height: 320px;

  padding: 45px 45px 24px 45px;

  border-radius: 24px;
  background-color: ${(p) => p.theme.colors.cardBackground};
`;
