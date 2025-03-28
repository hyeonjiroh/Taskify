import React from "react";
import clsx from "clsx";
import Image from "next/image";

interface UserIconProps {
  name: string;
  img: string | null;
  size: "sm" | "md" | "lg";
}

const iconSize: Record<string, string> = {
  sm: "w-[26px] h-[26px] text-xs",
  md: "w-[34px] h-[34px] text-md",
  lg: "w-[38px] h-[38px] text-lg",
};

// 프로필 이미지가 없는 유저의 경우 랜덤한 색상의 아이콘 생성(우선은 사용X)
// const ICON_COLORS = ["#7AC555", "#760DDE", "#FFA500", "#76A6EA", "#E876EA"];
// const getRandomColor = () => {
//   return ICON_COLORS[Math.floor(Math.random() * ICON_COLORS.length)];
// };

const UserIcon: React.FC<UserIconProps> = ({ name, size, img }) => {
  const initial = name.charAt(0).toUpperCase();

  return (
    <>
      {img ? (
        <div
          className={clsx(
            "relative rounded-full border-2 border-white",
            iconSize[size]
          )}
        >
          <Image
            src={img}
            fill
            className="rounded-full border-1 border-white"
            style={{
              objectFit: "cover",
            }}
            alt={name}
          />
        </div>
      ) : (
        <div
          className={clsx(
            "rounded-full flex items-center justify-center shrink-0 text-white font-semibold border-2 border-white",
            iconSize[size]
          )}
          style={{
            backgroundColor: "#76A6EA",
          }}
        >
          {initial}
        </div>
      )}
    </>
  );
};

export default UserIcon;
