import { FC, ReactNode, SyntheticEvent } from "react";
import { BackdropOverlay } from "./Backdrop.styled";

interface IBackdropProps {
  onClick?: (e: SyntheticEvent) => void;
  children?: ReactNode;
}

const Backdrop: FC<IBackdropProps> = ({ onClick, children }) => {
  return <BackdropOverlay onClick={onClick}>{children}</BackdropOverlay>;
};

export default Backdrop;
