import Box from "components/Box";
import styled from "styled-components";

export const ModalContainer = styled(Box)`
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

export const TooltipContainer = styled("div")`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;

  width: 328px;
  /* height: 614px; */
  height: 100px;
  border-radius: 24px;
  padding: 24px;

  /* border: 1px solid black; */
  border: 1px solid ${(p) => p.theme.colors.input};
  background-color: ${(p) => p.theme.colors.cardBackground};

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 60px;
    transform: translateY(calc(-50% - 1px)) rotate(45deg);

    width: 10px;
    height: 10px;

    /* border-left: 1px solid black; */
    /* border-top: 1px solid black; */
    border-left: 1px solid ${(p) => p.theme.colors.input};
    border-left: 1px solid ${(p) => p.theme.colors.input};
    background-color: white;
  }
`;
