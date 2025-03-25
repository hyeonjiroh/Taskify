"use client";

import { useIsMobile } from "@/lib/hooks/useCheckViewport";
import { useDashboardStore } from "@/lib/store/useDashboardStore";
import { useRouter } from "next/navigation";
import { Dashboard } from "@/lib/types";
import Image from "next/image";
import CrownIcon from "../../../../public/icon/crown_icon.svg";

export default function SideMenuItem({
  id,
  title,
  color,
  createdByMe,
}: Dashboard) {
  const dashboardId = useDashboardStore((state) => state.dashboardId);
  const isCurrent = String(id) === dashboardId;

  const router = useRouter();

  const isMobile = useIsMobile();

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
              <Image
                src={CrownIcon}
                width={isMobile ? 15 : 18}
                height={isMobile ? 12 : 14}
                alt=""
              />
            )}
          </div>
        )}
      </div>
    </button>
  );
}
