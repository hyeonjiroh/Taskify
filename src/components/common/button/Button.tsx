"use client";
import { ReactNode } from "react";
import {
  baseStyles,
  variantStyles,
  disabledStyles,
  radiusStyles,
  fontStyles,
} from "@/components/common/button/buttonStyles";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

interface ButtonProps {
  variant: "purple" | "whiteViolet" | "whiteGray";
  disabled?: boolean;
  width?: string;
  height?: string;
  radius?: "sm" | "lg";
  fontSize?: "xs" | "md" | "lg" | "2lg";
  onClick?: () => void;
  children: ReactNode;
}

const Button = ({
  variant = "purple",
  disabled = false,
  width,
  height,
  radius = "lg",
  fontSize = "lg",
  onClick,
  children,
  ...props
}: ButtonProps) => {
  const buttonStyles = twMerge(
    clsx(
      baseStyles,
      disabled ? disabledStyles : variantStyles[variant],
      radiusStyles[radius],
      fontStyles[fontSize]
    )
  );

  return (
    <button
      className={buttonStyles}
      style={{ width, height }}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
