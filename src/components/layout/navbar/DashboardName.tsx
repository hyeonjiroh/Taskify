"use client";

import { useIsPC } from "@/lib/hooks/useCheckViewport";

export default function DashboardName() {
  const isPC = useIsPC();

  return (
    <div className="font-bold text-lg text-gray-800 tablet:text-xl">
      {isPC ? "내 대시보드" : ""}
    </div>
  );
}
