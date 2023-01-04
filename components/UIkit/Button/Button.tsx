import { FC } from "react";
import {
  StyledButton,
  IconRightWrapper,
  IconLeftWrapper,
  ButtonBackdrop,
} from "./Button.styled";
import { IconBase, IconType } from "react-icons/lib";

export interface IBaseProps {
  backgroundColor?: string;
  color?: string;
  borderColor?: string;
  borderRadius?: string;
  pl?: string;
  pr?: string;
  pt?: string;
  pb?: string;
  width?: string;
  height?: string;
  fontSize?: string;
}

const baseProps: IBaseProps = {
  backgroundColor: "default",
  color: "default",
  borderColor: "default",
  borderRadius: "default",
  pl: "default",
  pr: "default",
  pt: "default",
  pb: "default",
  width: "auto",
  height: "auto",
  fontSize: "default",
};

interface IButtonProps extends IBaseProps {
  text: string;
  type?: "submit" | "button";
  //   hasPlusIcon?: boolean;
  iconLeft?: IconType | null;
  iconRight?: IconType | null;
  iconMargin?: string;
  iconSize?: string;

  //   backgroundColor?: string;
  //   color?: string;
  //   borderColor?: string;
  //   borderRadius?: string;
  //   pl?: string;
  //   pr?: string;
  //   pt?: string;
  //   pb?: string;
  //   width?: string;
  //   height?: string;
  //   fontSize?: string;
}

const Button: FC<IButtonProps> = ({
  type = "button",
  text,
  iconLeft: IconLeft = null,
  iconRight: IconRight = null,
  iconMargin = "default",
  iconSize,

  ...baseProps
  //   backgroundColor = "default",
  //   color = "default",
  //   borderColor = "default",
  //   borderRadius = "default",
  //   pl = "default",
  //   pr = "default",
  //   pt = "default",
  //   pb = "default",
  //   width = "auto",
  //   height = "auto",
  //   fontSize = "default",
}) => {
  return (
    <StyledButton
      type={type}
      {...(baseProps as IBaseProps)}
      //   backgroundColor={backgroundColor}
      //   color={color}
      //   borderColor={borderColor}
      //   borderRadius={borderRadius}
      //   pt={pt}
      //   pr={pr}
      //   pb={pb}
      //   pl={pl}
      //   width={width}
      //   height={height}
      //   fontSize={fontSize}
    >
      {IconLeft && (
        <IconLeftWrapper iconMargin={iconMargin}>
          <IconLeft size={iconSize} />
        </IconLeftWrapper>
      )}
      {text}

      {IconRight && (
        <IconRightWrapper iconMargin={iconMargin}>
          <IconRight size={iconSize} />
        </IconRightWrapper>
      )}

      <ButtonBackdrop />
    </StyledButton>
  );
};

export default Button;
