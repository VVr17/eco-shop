import { modalWidth } from "constants/constants";
import { FC, ReactNode, SyntheticEvent, useEffect } from "react";
import { createPortal } from "react-dom";
import Backdrop from "../Backdrop";
import { ModalContainer, TooltipContainer } from "./Modal.styled";

interface IModalProps {
  type: "classic" | "tooltip";
  onClose: () => void;
  children?: ReactNode;
}

const Modal: FC<IModalProps> = ({ type = "classic", onClose, children }) => {
  const onBackdropClick = (e: SyntheticEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const onEscClose = (e: Event & { code: string }) => {
      if (e.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onEscClose);

    return () => {
      window.removeEventListener("keydown", onEscClose);
    };
  }, [onClose]);

  if (type === "classic") {
    return createPortal(
      <Backdrop onClick={onBackdropClick}>
        <ModalContainer maxWidth={modalWidth}>{children}</ModalContainer>
      </Backdrop>,
      document.querySelector("#modal-root") as Element
    );
  }

  if (type === "tooltip") {
    return createPortal(
      <Backdrop onClick={onBackdropClick}>
        <TooltipContainer>{children}</TooltipContainer>
      </Backdrop>,
      document.querySelector("#modal-root") as Element
    );
  }
};

export default Modal;
