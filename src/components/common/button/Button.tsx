"use client";
import { ReactNode } from "react";
import {
  baseStyles,
  variantStyles,
  disabledStyles,
  radiusStyles,
  sizeStyles,
} from "@/components/common/button/buttonStyles";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  variant: "purple" | "whiteViolet" | "whiteGray";
  disabled?: boolean;
  radius?: "sm" | "lg";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  children: ReactNode;
}

const Button = ({
  variant = "purple",
  className,
  disabled = false,
  radius = "lg",
  size = "md",
  onClick,
  children,
  ...props
}: ButtonProps) => {
  const buttonStyles = twMerge(
    clsx(
      baseStyles,
      className,
      disabled ? disabledStyles : variantStyles[variant],
      radiusStyles[radius],
      sizeStyles[size]
    )
  );

  return (
    <button
      className={buttonStyles}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
