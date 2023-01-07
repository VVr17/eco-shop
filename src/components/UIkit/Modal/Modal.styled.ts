import styled from "styled-components";

export const ModalContainer = styled("div")`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;

  width: 824px;
  height: 564px;
  border-radius: 24px;
  padding: 50px 56px;

  background-color: ${(p) => p.theme.colors.cardBackground};
`;
