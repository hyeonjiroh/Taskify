"use client";

import useWindowSize from "@/lib/hooks/useWindowSize";
import BREAKPOINTS from "@/lib/constants/breakpoint";
import Image from "next/image";
import SmallLogo from "../../../../public/logo/logo_small.svg";
import LargeLogo from "../../../../public/logo/logo_large.svg";
import AddButton from "../../../../public/icon/add_box.svg";
import SideMenuList from "./SideMenuList";
import Link from "next/link";

export default function Sidebar() {
  const { width } = useWindowSize();
  const isMobile = width < BREAKPOINTS.TABLET;

  return (
    <div className="flex flex-col gap-10 tablet:gap-[57px] pc:gap-14">
      <button
        type="button"
        className="flex justify-center items-center pc:justify-start"
      >
        <Link href="/">
          <Image
            src={isMobile ? SmallLogo : LargeLogo}
            width={isMobile ? 24 : 110}
            height={isMobile ? 30 : 34}
            alt=""
          />
        </Link>
      </button>
      <div className="flex flex-col items-center gap-[22px] tablet:gap-[15px] tablet:items-stretch pc:gap-[16px]">
        <div className="flex justify-between">
          {!isMobile && (
            <div className="font-semibold text-xs text-gray-600">
              Dash Boards
            </div>
          )}
          <button type="button" className="rounded hover:bg-violet-8">
            <Image src={AddButton} width={20} height={20} alt="" />
          </button>
        </div>
        <SideMenuList />
      </div>
    </div>
  );
}
