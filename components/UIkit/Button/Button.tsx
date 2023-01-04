import { FC } from "react";
import { PlusIconWrapper, StyledButton } from "./Button.styled";
import { AiOutlinePlus } from "react-icons/ai";

interface IButtonProps {
  text: string;
  type?: "submit" | "button";
  hasPlusIcon?: boolean;
  backgroundColor?: string;
}

const Button: FC<IButtonProps> = ({
  type = "button",
  text,
  hasPlusIcon = false,
  backgroundColor = "default",
}) => {
  return (
    <StyledButton type={type} backgroundColor={backgroundColor}>
      {text}

      {hasPlusIcon && (
        <PlusIconWrapper>
          <AiOutlinePlus />
        </PlusIconWrapper>
      )}
    </StyledButton>
  );
};

export default Button;

/*
backgroundColor -> default = white, props  -> use theme 
borderColor

*/
