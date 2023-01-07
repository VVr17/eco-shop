import { FC, ReactNode } from "react";

interface IModalProps {
  onClose: () => void;
  children?: ReactNode;
}

const Modal: FC<IModalProps> = ({ onClose, children }) => {
  return <div>children</div>;
};

export default Modal;
