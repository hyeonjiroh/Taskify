"use client";

import { useIsMobile } from "@/lib/hooks/useCheckViewport";
import { useDashboardStore } from "@/lib/store/useDashboardStore";
import { useRouter } from "next/navigation";
import Image from "next/image";
import SmallLogo from "../../../../public/logo/logo_small.svg";
import LargeLogo from "../../../../public/logo/logo_large.svg";
import ROUTE from "@/lib/constants/route";

export default function LogoButton({
  variant,
}: {
  variant: "white" | "purple";
}) {
  const isMobile = useIsMobile();
  const router = useRouter();

  const setDashboardId = useDashboardStore((state) => state.setDashboardId);

  const navigateToHome = () => {
    router.push(ROUTE.HOME);
  };

  const navigateToMyDashboard = () => {
    router.push(ROUTE.MYDASHBOARD);
    setDashboardId(null);
  };

  const isHome = variant === "white";

  return (
    <button
      type="button"
      onClick={isHome ? navigateToHome : navigateToMyDashboard}
    >
      <Image
        src={isMobile ? SmallLogo : LargeLogo}
        width={isMobile ? 24 : 110}
        height={isMobile ? 30 : 34}
        className={isHome ? "invert brightness-0" : ""}
        alt=""
        priority
      />
    </button>
  );
}
