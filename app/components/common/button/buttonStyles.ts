export const baseStyles =
  "box-border flex items-center justify-center px-4 font-medium transition-colors duration-100";

// 기본 스타일 + variant별 스타일 + 비활성화 스타일
export const variantStyles = {
  purple: "bg-violet text-white hover:bg-violet-700",
  white: (textColor: "violet" | "gray") =>
    `bg-white border border-gray-400 ${
      textColor === "violet" ? "text-violet" : "text-gray-600"
    } hover:bg-purple-50`,
};

export const disabledStyles = "bg-gray-500 text-white cursor-not-allowed";

export const radiusStyles = {
  sm: "rounded",
  lg: "rounded-lg",
};

export const fontStyles = {
  xs: "text-xs leading-[18px]", // 12px / 18px
  md: "text-md", // 14px / 24px
  lg: "text-lg", // 16px / 26px
  "2lg": "text-2lg", // 18px / 26px
};
