import React, { useState } from "react";
import "./ContainedButton.css";

interface ContainedButtonProps {
  variant?: "contained" | "outlined" | "text";
  color?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  onClick?: () => Promise<any> | void;
  disabled?: boolean;
  className?: string;
}

const ContainedButton: React.FC<ContainedButtonProps> = ({
  variant = "contained",
  color = "primary",
  size = "medium",
  onClick,
  disabled = false,
  className,
}) => {
  const [loading, setLoading] = useState(false);

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

  const buttonClasses = [
    "custom-button",
    `custom-button-${variant}`,
    `custom-button-${color}`,
    `custom-button-${size}`,
    className,
  ].join(" ");

  return (
    <button
      className={buttonClasses}
      onClick={handleClick}
      disabled={loading || disabled}
    >
      {loading ? <span>Loading...</span> : " "}
    </button>
  );
};

export default ContainedButton;
