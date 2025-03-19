import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pretandard: ["Pretendard", "sans-serif"],
      },
      fontSize: {
        "3xl": ["32px", "42px"],
        "2xl": ["24px", "32px"],
        xl: ["20px", "32px"],
        "2lg": ["18px", "26px"],
        lg: ["16px", "26px"],
        md: ["14px", "24px"],
        sm: ["13px", "22px"],
        xs: ["12px", "20px"],
      },
      colors: {
        gray: {
          "900": "#171717",
          "800": "#333236",
          "700": "#4B4B4B",
          "600": "#787486",
          "500": "#9FA6B2",
          "400": "#D9D9D9",
          "300": "#EEEEEE",
          "200": "#FAFAFA",
        },
        violet: {
          DEFAULT: "#5534DA",
          "8": "#F1EFFD",
        },
        red: {
          DEFAULT: "#D6173A",
        },
        green: {
          DEFAULT: "#7AC555",
        },
        purple: {
          DEFAULT: "#760DDE",
        },
        orange: {
          DEFAULT: "#FFA500",
        },
        blue: {
          DEFAULT: "#7A6AEA",
        },
        pink: {
          DEFAULT: "#E876EA",
        },
      },
      screens: {
        mobile: "375px",
        tablet: "768px",
        pc: "1200px",
      },
    },
  },
  plugins: [],
};
export default config;
