"use client";

import { useEffect, useState } from "react";
import { fetchDashboardList } from "@/lib/apis/dashboardsApi";
import { DashboardList } from "@/lib/types";
import Pagination from "@/components/common/pagination-button/PaginationButton";
import AddDashboardButton from "./AddDashboardButton";
import DashboardCard from "./DashboardCard";

const PAGE_SIZE = 5;

export default function DashboardListSection({ token }: { token: string }) {
  const [myDashboards, setMyDashboards] = useState<DashboardList[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadDashboards() {
      setLoading(true);
      try {
        const {
          dashboards,
          totalCount,
        }: { dashboards: DashboardList[]; totalCount: number } =
          await fetchDashboardList({
            token,
            page,
            size: PAGE_SIZE,
          });

        setMyDashboards(dashboards.filter((d) => d.createdByMe));
        setTotalPages(Math.floor(totalCount / 6));
      } catch (error) {
        console.error("대시보드를 불러오는 중 오류 발생:", error);
      } finally {
        setLoading(false);
      }
    }
    loadDashboards();
  }, [page, token]);

  return (
    <div className="flex flex-col max-w-[1022px] gap-4 pc:gap-3">
      <div className="grid grid-cols-1 gap-2 items-stretch tablet:grid-cols-2 tablet:gap-[10px] pc:grid-cols-3 pc:gap-3">
        <AddDashboardButton />
        {myDashboards.map((dashboard) => (
          <DashboardCard
            key={dashboard.id}
            id={dashboard.id}
            title={dashboard.title}
            color={dashboard.color}
            createdByMe={dashboard.createdByMe}
          />
        ))}

        {loading && (
          <div className="flex justify-center mt-4">
            <div className="w-6 h-6 border-4 border-gray-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </div>
      <div className="flex justify-end">
        <div className="flex items-center gap-3 tablet:gap-4">
          <p className="font-normal text-xs text-gray-800 tablet:text-md">
            {totalPages} 페이지 중 {page}
          </p>
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPrevClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            onNextClick={() =>
              setPage((prev) => Math.min(prev + 1, totalPages))
            }
          />
        </div>
      </div>
    </div>
  );
}
