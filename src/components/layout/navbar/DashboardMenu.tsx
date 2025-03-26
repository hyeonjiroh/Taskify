"use client";

import Button from "@/components/common/button/Button";
import { useIsMobile } from "@/lib/hooks/useCheckViewport";
import Image from "next/image";
import SettingIcon from "../../../../public/icon/setting_icon.svg";
import AddIcon from "../../../../public/icon/add_box_icon.svg";

export default function DashboardMenu() {
  const isMobile = useIsMobile();

  return (
    <div className="flex gap-[6px] tablet:gap-3 pc:gap-4">
      <Button
        variant="whiteGray"
        className="flex gap-2 w-[49px] h-[30px] tablet:w-[85px] tablet:h-[36px] pc:w-[88px] pc:h-[40px]"
      >
        {!isMobile && <Image src={SettingIcon} width={20} height={20} alt="" />}
        <div className="font-medium text-md text-gray-600 pc:text-lg">관리</div>
      </Button>
      <Button
        variant="whiteGray"
        className="flex gap-2 w-[73px] h-[30px] tablet:w-[109px] tablet:h-[36px] pc:w-[116px] pc:h-[40px]"
      >
        {!isMobile && <Image src={AddIcon} width={20} height={20} alt="" />}
        <div className="font-medium text-md text-gray-600 pc:text-lg">
          초대하기
        </div>
      </Button>
    </div>
  );
}
