"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useIsMobile } from "@/lib/hooks/useCheckViewport";
import UserIcon from "@/components/common/user-icon/UserIcon";
import ROUTE from "@/lib/constants/route";

export default function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const isMobile = useIsMobile();

  const handleLogout = () => {
    alert("로그아웃"); // 로그아웃 API 요청 넣기
    router.push(ROUTE.HOME);
  };

  return (
    <div
      onClick={() => setIsOpen((prev) => !prev)}
      className="flex items-center gap-3 relative cursor-pointer"
    >
      <div>
        <UserIcon name="Test" size={isMobile ? "md" : "lg"} />
      </div>
      {!isMobile && (
        <div className="font-medium text-lg text-gray-800">유저명</div> // 나중에 실제 유저명 받아서 넣을 수 있도록
      )}
      {isOpen && (
        <div className="flex flex-col justify-between absolute top-[42px] right-0 p-[6px] rounded-md bg-white border border-gray-400 tablet:right-[-8px]">
          <button
            onClick={() => {
              router.push(ROUTE.MYPAGE);
            }}
            className="w-[81px] h-8 rounded font-normal text-md text-gray-800 hover:text-violet hover:bg-violet-8"
          >
            내 정보
          </button>
          <button
            onClick={handleLogout}
            className="w-[81px] h-8 rounded font-normal text-md text-gray-800 hover:text-violet hover:bg-violet-8"
          >
            로그아웃
          </button>
        </div>
      )}
    </div>
  );
}
