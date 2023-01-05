import { FC } from "react";
import {
  StyledButton,
  IconRightWrapper,
  IconLeftWrapper,
} from "./Button.styled";
import { IconType } from "react-icons/lib";
import {
  DEFAULT_STYLES_VALUE,
  IBaseProps,
  UI_BASE_PROPS,
} from "../base/uiBaseProps";

interface IButtonProps extends IBaseProps {
  text: string;
  type?: "submit" | "button";
  iconLeft?: IconType | null;
  iconRight?: IconType | null;
  iconMargin?: string;
  iconSize?: string;
}

const Button: FC<IButtonProps> = ({
  type = "button",
  text,
  iconLeft: IconLeft = null,
  iconRight: IconRight = null,
  iconMargin = DEFAULT_STYLES_VALUE,
  iconSize,

  ...rest
}) => {
  const commonProps = { ...UI_BASE_PROPS, ...rest };

  // console.log(`text: ${text}`, commonProps);
  return (
    <StyledButton type={type} {...commonProps}>
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
    </StyledButton>
  );
};

export default Button;
