"use client";

import { useRouter } from "next/navigation";
import { useDashboardStore } from "@/lib/store/useDashboardStore";
import { deleteDashboard } from "@/lib/apis/dashboardsApi";
import ROUTE from "@/lib/constants/route";

export default function DeleteButton({
  id,
  token,
}: {
  id: number;
  token: string;
}) {
  const router = useRouter();
  const setDashboardId = useDashboardStore((state) => state.setDashboardId);

  const handleDeleteClick = async () => {
    await deleteDashboard({
      token,
      id,
    });

    router.push(ROUTE.MYDASHBOARD);
    setDashboardId(null);
  };

  return (
    <button
      type="button"
      onClick={handleDeleteClick}
      className="max-w-[320px] h-[52px] rounded-lg border border-gray-400 bg-gray-200 font-medium text-lg text-gray-800 tablet:h-[62px] tablet:text-2lg hover:bg-gray-300"
    >
      대시보드 삭제하기
    </button>
  );
}
