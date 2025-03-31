"use client";

import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type Direction = "prev" | "next";

interface PaginationButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  direction: Direction;
}

const ArrowIcon = ({ direction }: { direction: Direction }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d={direction === "prev" ? "M10 3L5 8L10 13" : "M6 3L11 8L6 13"}
      stroke="#d9d9d9"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PaginationButton = ({
  direction,
  className,
  ...props
}: PaginationButtonProps) => {
  return (
    <button
      type="button"
      {...props}
      className={clsx(
        "w-10 h-10 flex items-center justify-center",
        "border border-[#d9d9d9]",
        "rounded-[4px]",
        !props.disabled && [
          "transition-colors",
          "hover:bg-gray-50 hover:border-gray-400",
          "active:bg-gray-100 active:border-gray-500",
        ],
        props.disabled && "cursor-not-allowed opacity-50",
        className
      )}
      aria-label={`${direction === "prev" ? "이전" : "다음"} 페이지`}
    >
      <ArrowIcon direction={direction} />
    </button>
  );
};

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPrevClick: () => void;
  onNextClick: () => void;
  className?: string;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPrevClick,
  onNextClick,
  className = "",
}: PaginationProps) {
  return (
    <div className={clsx("flex items-center", className)}>
      <PaginationButton
        direction="prev"
        onClick={onPrevClick}
        disabled={currentPage <= 1}
      />
      <PaginationButton
        direction="next"
        onClick={onNextClick}
        disabled={currentPage >= totalPages}
      />
    </div>
  );
}
