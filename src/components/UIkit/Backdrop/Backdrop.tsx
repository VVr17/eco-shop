import { useModalStopScroll } from "hooks/useModalStopScroll";
import { FC, ReactNode, SyntheticEvent, useEffect } from "react";
import { BackdropOverlay } from "./Backdrop.styled";

interface IBackdropProps {
  onClick?: (e: SyntheticEvent) => void;
  children?: ReactNode;
}

const Backdrop: FC<IBackdropProps> = ({ onClick, children }) => {
  useModalStopScroll();

  return <BackdropOverlay onClick={onClick}>{children}</BackdropOverlay>;
};

export default Backdrop;
