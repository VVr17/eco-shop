import { modalWidth } from "constants/constants";
import {
  FC,
  ReactNode,
  SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import Backdrop from "../Backdrop";
import { ModalContainer, TooltipContainer } from "./Modal.styled";

interface IModalProps {
  type: "classic" | "tooltip";
  onClose: () => void;
  children?: ReactNode;
  width?: string;
}

const Modal: FC<IModalProps> = ({
  type = "classic",
  onClose,
  width = "328px",
  children,
}): any => {
  const [isBrowser, setIsBrowser] = useState(false);
  const refParent = useRef(document.getElementById("tooltipTestID"));

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

  if (type === "classic") {
    return createPortal(
      <Backdrop onClick={onBackdropClick}>
        <ModalContainer maxWidth={modalWidth}>{children}</ModalContainer>
      </Backdrop>,
      document.querySelector("#modal-root") as Element
    );
  }

  if (type === "tooltip") {
    let posX: number = 0;
    let posY: number = 0;

    if (refParent) {
      // console.log(refParent.current?.getBoundingClientRect());
      const { bottom, left, width } =
        refParent.current?.getBoundingClientRect() as {
          bottom: number;
          left: number;
          width: number;
        };

      posX = left + width / 2;
      posY = bottom;
    }
    console.log(posX, posY);
    return createPortal(
      <Backdrop onClick={onBackdropClick}>
        <TooltipContainer width={width} posX={posX} posY={posY}>
          {children}
        </TooltipContainer>
      </Backdrop>,
      document.querySelector("#modal-root") as Element
    );
  }
};

export default Modal;
