import React, { useState, ButtonHTMLAttributes } from "react";
import "./Button.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "text" | "contained" | "outlined";
  size?: "sm" | "md" | "lg" | "xl";
  color?: "primary" | "secondary" | "success" | "danger";
  onClick?: () => Promise<any> | void;
  disabled?: boolean;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "outlined",
  size = "md",
  color = "primary",
  className,
  onClick,
  disabled = false,
  icon,
  children,
}) => {
  const [loading, setLoading] = useState(false);

  const btnClasses = `btn ${
    className || ""
  } font-${size} basic-${variant} btn-${color} ${
    disabled ? getDisabledClass(variant) : ""
  }`;

  const handleClick = async () => {
    if (onClick) {
      let onClickResult = onClick();

      if (onClickResult instanceof Promise) {
        setLoading(true);
        await onClickResult;
      }

      setLoading(false);
      return onClickResult instanceof Promise ? undefined : onClickResult;
    }
  };

  function getDisabledClass(variant: ButtonProps["variant"]) {
    if (variant === "text") {
      return "disable-text";
    } else if (variant === "contained") {
      return "disable-contained";
    } else if (variant === "outlined") {
      return "disable-outlined";
    } else {
      return "";
    }
  }

  return (
    <button
      className={btnClasses}
      onClick={handleClick}
      disabled={loading || disabled}
    >
      {icon && <span className="icon">{icon}</span>}
      {loading ? <span>Loading...</span> : children}
    </button>
  );
};

export default Button;
