"use client";

import { useEffect, useState } from "react";
import { fetchDashboardList } from "@/lib/apis/dashboardsApi";
import { DashboardList } from "@/lib/types";
import Pagination from "@/components/common/pagination-button/PaginationButton";

const PAGE_SIZE = 6;

export default function DashboardListSection({ token }: { token: string }) {
  const [myDashboards, setMyDashboards] = useState<DashboardList[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadDashboards() {
      setLoading(true);
      try {
        const {
          dashboards,
          total,
        }: { dashboards: DashboardList[]; total: number } =
          await fetchDashboardList({
            token,
            page,
            size: PAGE_SIZE,
          });

        setMyDashboards(dashboards.filter((d) => d.createdByMe));
        setTotalPages(Math.ceil(total / PAGE_SIZE));
      } catch (error) {
        console.error("대시보드를 불러오는 중 오류 발생:", error);
      } finally {
        setLoading(false);
      }
    }
    loadDashboards();
  }, [page, token]);

  return (
    <div className="max-w-[1022px]">
      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg flex items-center">
        새로운 대시보드 +
      </button>

      <div>
        <h2 className="text-lg font-semibold">내 대시보드</h2>
        {myDashboards.length > 0 ? (
          <ul className="mt-4 space-y-2">
            {myDashboards.map((dashboard) => (
              <li key={dashboard.id} className="p-4 bg-white shadow rounded-lg">
                {dashboard.title}
              </li>
            ))}
          </ul>
        ) : (
          !loading && (
            <div className="p-6 bg-gray-100 text-center rounded-lg">
              <p className="text-gray-500">아직 생성한 대시보드가 없어요.</p>
            </div>
          )
        )}

        {loading && (
          <div className="flex justify-center mt-4">
            <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        <div className="flex justify-center mt-4">
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
