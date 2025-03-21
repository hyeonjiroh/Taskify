import React from "react";

interface UserIconProps {
  name: string;
  isClickable?: boolean;
  onClick?: () => void;
}

const UserIcon: React.FC<UserIconProps> = ({
  name,
  isClickable = true,
  onClick,
}) => {
  const initial = name.charAt(0).toUpperCase();

  return (
    <button
      onClick={isClickable ? onClick : undefined}
      disabled={!isClickable}
      className={`
        w-[38px] h-[38px] rounded-full flex items-center justify-center
        bg-[#A3C4A2] text-black text-lg font-medium border-2 border-white
        ${isClickable ? "cursor-pointer hover:opacity-80" : "cursor-not-allowed opacity-50"}
      `}
    >
      {initial}
    </button>
  );
};

export default UserIcon;
