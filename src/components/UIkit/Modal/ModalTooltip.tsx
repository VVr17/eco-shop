import { useResizeViewportRender } from "hooks/useResizeViewportRender";
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
import { TooltipContainer } from "./Modal.styled";

interface IModalTooltipProps {
  onClose: () => void;
  children?: ReactNode;
  width?: string;
}

const ModalTooltip: FC<IModalTooltipProps> = ({
  onClose,
  width = "328px",
  children,
}): any => {
  const [isBrowser, setIsBrowser] = useState(false);
  const refParent = useRef(document.getElementById("tooltipID"));

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  useResizeViewportRender();

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

  let posX: number = 0;
  let posY: number = 0;

  if (refParent) {
    console.log(refParent.current);
    const { bottom, left, width } =
      refParent.current?.getBoundingClientRect() as {
        bottom: number;
        left: number;
        width: number;
      };

    posX = left + width / 2;
    posY = bottom;
  }
  //   console.log(posX, posY);
  return createPortal(
    <Backdrop onClick={onBackdropClick}>
      <TooltipContainer width={width} posX={posX} posY={posY}>
        {children}
      </TooltipContainer>
    </Backdrop>,
    document.querySelector("#modal-root") as Element
  );
};

export default ModalTooltip;
