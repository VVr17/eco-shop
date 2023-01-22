import React, { FC, HTMLInputTypeAttribute, MouseEventHandler } from "react";
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
  id?: HTMLInputTypeAttribute;
  type?: "submit" | "button";
  iconLeft?: IconType | null;
  iconRight?: IconType | null;
  iconMargin?: string;
  iconSize?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export type Ref = HTMLButtonElement;

const Button = React.forwardRef<Ref, IButtonProps>(
  (
    {
      type = "button",
      text,
      iconLeft: IconLeft = null,
      iconRight: IconRight = null,
      iconMargin = DEFAULT_STYLES_VALUE,
      iconSize,
      id,
      onClick,
      ...rest
    },
    ref
  ) => {
    const commonProps = { ...UI_BASE_PROPS, ...rest };

    // console.log(`text: ${text}`, commonProps);
    return (
      <StyledButton
        ref={ref}
        id={id}
        type={type}
        onClick={onClick}
        {...commonProps}
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
      </StyledButton>
    );
  }
);

export default Button;
