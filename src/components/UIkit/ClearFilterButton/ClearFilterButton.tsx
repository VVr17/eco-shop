import { ButtonStyled } from "./ClearFilterButton.styled";

interface IProps {
  type?: "button";
  children?: React.ReactNode;
  onClick?: () => void;
}

const ClearFilterButton: React.FC<IProps> = ({
  children,
  type = "button",
  onClick,
}) => {
  return (
    <ButtonStyled type={type} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};

export default ClearFilterButton;
