import Backdrop from "../Backdrop";
import { modalWidth } from "constants/constants";
import { FC, ReactNode, SyntheticEvent, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ModalContainer } from "./Modal.styled";

interface IModalProps {
  onClose: () => void;
  children?: ReactNode;
}

const Modal: FC<IModalProps> = ({
  onClose,

  children,
}): any => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

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

    window.onscroll = function () {
      window.scrollTo(0, 0);
    };

    window.addEventListener("keydown", onEscClose);

    return () => {
      window.removeEventListener("keydown", onEscClose);
      window.onscroll = function () {};
    };
  }, [onClose]);

  if (!isBrowser) {
    return null;
  }

  return createPortal(
    <Backdrop onClick={onBackdropClick}>
      <ModalContainer maxWidth={modalWidth}>{children}</ModalContainer>
    </Backdrop>,
    document.querySelector("#modal-root") as Element
  );
};

export default Modal;
