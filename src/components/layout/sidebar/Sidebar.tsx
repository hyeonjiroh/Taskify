"use client";

import useWindowSize from "@/lib/hooks/useWindowSize";
import BREAKPOINTS from "@/lib/constants/breakpoint";
import LogoButton from "@/components/common/logo-button/LogoButton";
import AddButton from "./AddButton";
import SideMenuList from "./SideMenuList";

export default function Sidebar() {
  const { width } = useWindowSize();
  const isMobile = width < BREAKPOINTS.TABLET;

  return (
    <div className="flex flex-col gap-10 tablet:gap-[57px] pc:gap-14">
      <LogoButton isMobile={isMobile} variant={"purple"} />
      <div className="flex flex-col items-center gap-[22px] tablet:gap-[15px] tablet:items-stretch pc:gap-[16px]">
        <div className="flex justify-between">
          {!isMobile && (
            <div className="font-semibold text-xs text-gray-600">
              Dash Boards
            </div>
          )}
          <AddButton />
        </div>
        <SideMenuList />
      </div>
    </div>
  );
}
