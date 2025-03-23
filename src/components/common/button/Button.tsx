"use client";
import { ReactNode } from "react";
import {
  baseStyles,
  variantStyles,
  disabledStyles,
  radiusStyles,
  fontStyles,
} from "./buttonStyles";

interface ButtonProps {
  variant: "purple" | "white"; //버튼 스타일
  disabled?: boolean; //비활성화 여부
  width?: string;
  height?: string;
  radius?: "sm" | "lg"; //둥글기 (4px 혹은 8px)
  fontSize?: "xs" | "md" | "lg" | "2lg"; //12px, 14px, 16px, 18px
  textColor?: "violet" | "gray"; //버튼 색이 white일 때만 사용
  onClick?: () => void;
  className: string;
  children: ReactNode;
}

const Button = ({
  variant,
  disabled = false,
  width,
  height,
  radius = "lg",
  fontSize = "lg",
  textColor = "violet",
  onClick,
  className = "",
  children,
}: ButtonProps) => {
  // 동적으로 클래스 조합
  const buttonStyles = `${baseStyles} ${
    disabled
      ? disabledStyles
      : variant === "purple"
        ? variantStyles.purple
        : variantStyles.white(textColor)
  } ${radiusStyles[radius]} ${fontStyles[fontSize]} ${className}`;

  return (
    <button
      className={buttonStyles}
      style={{ width, height }}
      onClick={disabled ? undefined : onClick} // 비활성화 시 클릭 불가
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
