import { FC, ReactNode } from "react";
import { createPortal } from "react-dom";
import Backdrop from "../Backdrop";
import { ModalContainer } from "./Modal.styled";

// const modalRoot = document.querySelector("#modal-root");

interface IModalProps {
  onClose: () => void;
  children?: ReactNode;
}

const Modal: FC<IModalProps> = ({ onClose, children }) => {
  return createPortal(
    <Backdrop>
      <ModalContainer>{children}</ModalContainer>
    </Backdrop>,
    document.querySelector("#modal-root") as Element
  );
};

export default Modal;
