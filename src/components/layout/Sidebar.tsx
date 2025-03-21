"use client";

import BREAKPOINTS from "@/lib/constants/breakpoint";
import useWindowSize from "@/lib/hooks/useWindowSize";
import { useDashboardStore } from "@/lib/store/useDashboardStore";
import SmallLogo from "../../../public/logo/logo_small.svg";
import LargeLogo from "../../../public/logo/logo_large.svg";
import Image from "next/image";

export default function Sidebar() {
  const dashboardId = useDashboardStore((state) => state.dashboardId);
  const { width } = useWindowSize();

  const isMobile = BREAKPOINTS.MOBILE > width;

  return (
    <div>
      <div>
        <Image src={isMobile ? SmallLogo : LargeLogo} alt="logo" />
      </div>
    </div>
  );
}
