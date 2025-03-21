"use client";

import { useDashboardStore } from "@/lib/store/useDashboardStore";
import useWindowSize from "@/lib/hooks/useWindowSize";
import BREAKPOINTS from "@/lib/constants/breakpoint";
import Image from "next/image";
import SmallLogo from "../../../public/logo/logo_small.svg";
import LargeLogo from "../../../public/logo/logo_large.svg";

export default function Sidebar() {
  const dashboardId = useDashboardStore((state) => state.dashboardId);

  const { width } = useWindowSize();
  const isMobile = width < BREAKPOINTS.TABLET;

  return (
    <div className="flex flex-col gap-10 tablet:gap-14">
      <div className="flex justify-center items-center pc:justify-start">
        <Image src={isMobile ? SmallLogo : LargeLogo} alt="" />
      </div>
      <div>content</div>
    </div>
  );
}
