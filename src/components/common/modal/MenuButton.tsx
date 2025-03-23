import { useState } from "react";
import Image from "next/image";
import MenuButtonIcon from "../../../../public/icon/menu_icon.svg";

export default function MenuButton({ isMobile }: { isMobile: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setIsOpen((prev) => !prev)}
      className="relative"
    >
      <Image
        src={MenuButtonIcon}
        width={isMobile ? 20 : 28}
        height={isMobile ? 20 : 28}
        className="rounded-full hover:bg-gray-300"
        alt=""
      />
      {isOpen && (
        <div className="flex flex-col justify-between absolute top-8 right-0 p-[6px] rounded-md bg-white border border-gray-400">
          <button className="w-[81px] h-8 rounded font-normal text-md text-gray-800 hover:text-violet hover:bg-violet-8">
            수정하기
          </button>
          <button className="w-[81px] h-8 rounded font-normal text-md text-gray-800 hover:text-violet hover:bg-violet-8">
            삭제하기
          </button>
        </div>
      )}
    </button>
  );
}
