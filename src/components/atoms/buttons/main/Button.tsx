import cx from "classnames";
import { ButtonHTMLAttributes, FC } from "react";
import "./button.css";

interface InterfaceButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  textSize?: "sm" | "lg";
  color?: "primary" | "secondary";
  width?: number | "full";
  height?: number;
  classNames?: string;
}

const Button: FC<InterfaceButton> = ({
  text,
  textSize = "sm",
  color = "primary",
  width = 100,
  height,
  classNames = "",
  ...rest // Capture any additional props using the rest operator
}) => {
  const buttonStyle = {
    width: width === "full" ? "" : `${width}px`,
    height: height ? `${height}px` : "auto",
  };

  const otherOption = {
    "w-full": width === "full",
    "text-sm": textSize === "sm",
    "text-xl": textSize === "lg",
    "button-primary": color === "primary",
    "button-secondary": color === "secondary",
  };

  return (
    <button
      className={cx(
        `px-3 py-2 rounded-full font-medium ${classNames}`,
        otherOption
      )}
      style={buttonStyle}
      {...rest} // Spread any additional props onto the button element
    >
      {text}
    </button>
  );
};

export default Button;
