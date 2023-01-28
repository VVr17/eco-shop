import { IconButtonStyled } from "./DeleteIconButton.styled";

interface IProps {
  type?: "button" | "submit" | "reset";
  children?: React.ReactNode;
  onClick?: () => void;
}

const DeleteIconButton: React.FC<IProps> = ({
  children,
  type = "button",
  onClick,
  ...allyProps
}) => {
  return (
    <IconButtonStyled type={type} {...allyProps} onClick={onClick}>
      {children}
    </IconButtonStyled>
  );
};

export default DeleteIconButton;
