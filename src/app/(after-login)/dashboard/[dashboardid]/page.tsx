"use client";

import { useIsMobile } from "@/lib/hooks/useCheckViewport";
import Button from "@/components/common/button/Button";
import Image from "next/image";
import AddIcon from "../../../../../public/icon/add_icon.svg";

export default function Page({ params }: { params: { dashboardid: string } }) {
  const isMobile = useIsMobile();

  return (
    <div>
      <div>컬럼 컴포넌트</div>
      <Button
        variant="whiteGray"
        className="flex gap-3 w-full h-[66px] rounded-lg tablet:h-[70px] pc:w-[354px]"
      >
        <div className="font-bold text-lg text-gray-800 tablet:text-2lg">
          새로운 컬럼 추가하기
        </div>
        <Image
          src={AddIcon}
          className="w-[20px] h-[20px] tablet:w-[22px] tablet:h-[22px]"
          alt=""
        />
      </Button>
    </div>
  );
}
