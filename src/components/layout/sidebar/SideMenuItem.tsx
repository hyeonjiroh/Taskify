"use client";

import useWindowSize from "@/lib/hooks/useWindowSize";
import BREAKPOINTS from "@/lib/constants/breakpoint";
import { useDashboardStore } from "@/lib/hooks/useDashboardStore";
import { useRouter } from "next/navigation";
import { Dashboard } from "@/lib/types";
import Image from "next/image";
import CrownIcon from "../../../../public/icon/crown.svg";

export default function SideMenuItem({
  id,
  title,
  color,
  createdByMe,
}: Dashboard) {
  const dashboardId = useDashboardStore((state) => state.dashboardId);
  const isCurrent = String(id) === dashboardId;

  const router = useRouter();

  const { width } = useWindowSize();
  const isMobile = width < BREAKPOINTS.TABLET;

  return (
    <button
      type="button"
      onClick={() => {
        router.push(`/dashboard/${id}`);
      }}
      className="flex items-center p-4 rounded hover:bg-violet-8 tablet:px-[10px] tablet:py-2 pc:p-3"
      style={isCurrent ? { background: "#f1effd" } : {}}
      disabled={isCurrent}
    >
      <div className="flex gap-4 w-full">
        <div className="flex items-center">
          <div
            style={{ background: color }}
            className="w-2 h-2 rounded-full"
          ></div>
        </div>
        {!isMobile && (
          <div className="flex items-center overflow-hidden tablet:gap-1 pc:gap-[6px]">
            <div className="font-medium text-lg truncate text-gray-600 pc:text-2lg">
              {title}
            </div>
            {createdByMe && (
              <div className="min-w-[15px] h-[12px] relative pc:min-w-[18px] pc:h-[14px]">
                <Image src={CrownIcon} fill alt="" />
              </div>
            )}
          </div>
        )}
      </div>
    </button>
  );
}
