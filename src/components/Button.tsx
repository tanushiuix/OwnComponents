import React, { useState, ButtonHTMLAttributes } from "react";
import "./Button.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "text" | "contained" | "outlined";
  size?: "sm" | "md" | "lg" | "xl";
  color?: "primary" | "secondary" | "success" | "danger";
  onClick?: () => Promise<any> | void;
}

const Button: React.FC<ButtonProps> = ({
  variant = "outlined",
  size = "md",
  color = "primary",
  className,
  onClick,
  disabled,
  children,
}) => {
  const [loading, setLoading] = useState(false);

  const btnClasses = `btn ${className || ""} font-${size} btn-${color}`;

  const handleClick = async () => {
    if (onClick) {
      let onClickResult = onClick();

      if (onClickResult instanceof Promise) {
        setLoading(true);
        await onClickResult;
      }

      onClickResult =
        onClickResult instanceof Promise ? undefined : onClickResult;

      setLoading(false);
      return onClickResult;
    }
  };

  return (
    <button
      className={`${btnClasses} `}
      onClick={handleClick}
      disabled={loading || disabled}
    >
      {loading ? <span>Loading...</span> : children}
    </button>
  );
};

export default Button;
