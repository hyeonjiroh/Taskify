import React from "react";
import clsx from "clsx";

interface UserIconProps {
  name: string;
  size: "sm" | "md" | "lg";
}

const iconSize: Record<string, string> = {
  sm: "w-[26px] h-[26px] text-xs",
  md: "w-[34px] h-[34px] text-md",
  lg: "w-[38px] h-[38px] text-lg",
};

const UserIcon: React.FC<UserIconProps> = ({ name, size }) => {
  const initial = name.charAt(0).toUpperCase();

  return (
    <div
      className={clsx(
        "rounded-full flex items-center justify-center shrink-0 bg-[#A3C4A2] text-white font-semibold border-2 border-white",
        iconSize[size]
      )}
    >
      {initial}
    </div>
  );
};

export default UserIcon;
