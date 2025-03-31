"use client";

import { useEffect, useState } from "react";
import { fetchDashboardList } from "@/lib/apis/dashboardsApi";
import { DashboardList } from "@/lib/types";

const PAGE_SIZE = 6;

export default function DashboardListSection({ token }: { token: string }) {
  const [myDashboards, setMyDashboards] = useState<DashboardList[]>([]);
  const [page, setPage] = useState(1);

  setPage(1); // vercel 배포 때문에 임시로 넣은 코드라 삭제하시면 됩니다.

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDashboards() {
      try {
        const { dashboards }: { dashboards: DashboardList[] } =
          await fetchDashboardList({
            token: token,
            page: page,
            size: PAGE_SIZE,
          });

        setMyDashboards(
          dashboards.filter((dashboard) => dashboard.createdByMe)
        );
      } catch (error) {
        console.error("대시보드를 불러오는 중 오류 발생:", error);
      } finally {
        setLoading(false);
      }
    }
    loadDashboards();
  }, []);

  return (
    <>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg flex items-center">
        새로운 대시보드 +
      </button>

      <div>
        <h2 className="text-lg font-semibold">내 대시보드</h2>
        {loading ? (
          <p>로딩 중...</p>
        ) : myDashboards.length > 0 ? (
          <ul className="mt-4 space-y-2">
            {myDashboards.map((dashboard) => (
              <li key={dashboard.id} className="p-4 bg-white shadow rounded-lg">
                {dashboard.title}
              </li>
            ))}
          </ul>
        ) : (
          <div className="p-6 bg-gray-100 text-center rounded-lg">
            <p className="text-gray-500">아직 생성한 대시보드가 없어요.</p>
          </div>
        )}
      </div>
    </>
  );
}
