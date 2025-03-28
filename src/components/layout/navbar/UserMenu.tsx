"use client";

import { useEffect, useState } from "react";
import { UserInfo } from "@/lib/types";
import { useRouter } from "next/navigation";
import { useDashboardStore } from "@/lib/store/useDashboardStore";
import { fetchUser } from "@/lib/apis/usersApi";
import { TOKEN_1 } from "@/lib/constants/tokens";
import { useIsMobile } from "@/lib/hooks/useCheckViewport";
import UserIcon from "@/components/common/user-icon/UserIcon";
import ROUTE from "@/lib/constants/route";

export default function UserMenu() {
  const [data, setData] = useState<UserInfo | null>(null);

  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  const router = useRouter();

  const setDashboardId = useDashboardStore((state) => state.setDashboardId);

  useEffect(() => {
    const getData = async () => {
      const res = await fetchUser({
        token: TOKEN_1,
      });
      setData(res);
    };

    getData();
  }, []);

  if (!data) return;

  const { nickname, profileImageUrl } = data;

  const handleMypage = () => {
    router.push(ROUTE.MYPAGE);
    setDashboardId(null);
  };

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
        <UserIcon
          name={nickname}
          img={profileImageUrl}
          size={isMobile ? "md" : "lg"}
        />
      </div>
      {!isMobile && (
        <div className="font-medium text-lg text-gray-800">{nickname}</div>
      )}
      {isOpen && (
        <div className="flex flex-col justify-between absolute top-[42px] right-0 p-[6px] rounded-md bg-white border border-gray-400 tablet:right-[-8px]">
          <button
            onClick={handleMypage}
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
