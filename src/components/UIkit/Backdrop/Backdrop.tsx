import { FC, ReactNode } from "react";
import { BackdropOverlay } from "./Backdrop.styled";

interface IBackdropProps {
  children?: ReactNode;
}

const Backdrop: FC<IBackdropProps> = ({ children }) => {
  return <BackdropOverlay>{children}</BackdropOverlay>;
};

export default Backdrop;
