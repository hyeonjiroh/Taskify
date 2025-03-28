"use client";
import { forwardRef } from "react";
import { inputStyles } from "@/components/common/input/inputStyles";
import { usePasswordVisibility } from "@/components/common/input/usePasswordVisibility";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: "text" | "email" | "password" | "date";
  label: string;
  width?: string;
  height?: "sm" | "md" | "lg" | "xl";
  hasIcon?: "left" | "right";
  iconSrc?: string;
  alt?: string;
  error?: boolean;
  errorMessage?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = "text",
      label,
      width = "full",
      height = "xl",
      hasIcon,
      iconSrc,
      alt,
      error = false,
      errorMessage,
      required,
      ...props
    },
    ref
  ) => {
    const { isPasswordVisible, togglePasswordVisibility } =
      usePasswordVisibility();

    const inputType = type === "password" && isPasswordVisible ? "text" : type;
    const iconPath =
      type === "password"
        ? isPasswordVisible
          ? "/icon/visibility_off_icon.svg"
          : "/icon/visibility_icon.svg"
        : iconSrc;

    const styles = twMerge(
      clsx(inputStyles.base, inputStyles.height[height], {
        "w-full": width === "full",
        [inputStyles.leftIcon]: hasIcon === "left",
        [inputStyles.rightIcon]: hasIcon === "right",
        [inputStyles.error]: error,
      })
    );

    return (
      <div className="flex flex-col">
        <label className={inputStyles.label} htmlFor={label}>
          {label}
          {required && <span className="ml-0.5 text-violet">*</span>}
        </label>
        <div
          className="relative"
          style={{ width: width !== "full" ? width : undefined }}
        >
          <input
            ref={ref}
            className={styles}
            type={inputType}
            id={label}
            {...props}
          />
          {hasIcon && iconPath && (
            <Image
              src={iconPath}
              alt={alt || "icon"}
              width={24}
              height={24}
              className={clsx("absolute top-1/2 transform -translate-y-1/2", {
                "left-4": hasIcon === "left",
                "right-4": hasIcon === "right",
                "cursor-pointer": type === "password",
              })}
              onClick={togglePasswordVisibility}
            />
          )}
        </div>
        {error && errorMessage && (
          <span className={clsx(inputStyles.errorMessage)}>{errorMessage}</span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
