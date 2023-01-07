import { IconButtonStyled } from "./IconButton.styled";

interface IProps {
  type?: "button" | "submit" | "reset";
  children?: React.ReactNode;
  onClick?: () => void;
}

const IconButton: React.FC<IProps> = ({
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

export default IconButton;
