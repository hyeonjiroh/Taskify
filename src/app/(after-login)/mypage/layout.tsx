import { DashboardList } from "@/lib/types";
import { fetchDashboardList } from "@/lib/apis/dashboardsApi";
import { cookies } from "next/headers";
import DashboardMenu from "@/components/layout/navbar/DashboardMenu";
import UserMenu from "@/components/layout/navbar/UserMenu";

const PAGE_SIZE = 15;

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const accessToken = cookies().get("accessToken")?.value ?? "";

  const { dashboards } = await fetchDashboardList({
    token: accessToken,
    page: 1,
    size: PAGE_SIZE,
  });

  const firstDashboardId = dashboards[0]?.id;

  const myFirstDashboardId = dashboards.find(
    (dashboard: DashboardList) => dashboard.createdByMe
  )?.id;

  return (
    <>
      <div className="flex justify-between items-center shrink-0 h-[60px] pl-4 pr-2 border-b border-gray-400 tablet:h-[70px] tablet:pl-10 tablet:pr-8 pc:pl-10 pc:pr-20">
        <div className="font-bold text-lg text-gray-800 tablet:text-xl">
          계정관리
        </div>
        <div className="flex items-center">
          <div className="pr-4 tablet:pr-8 pc:pr-9">
            <DashboardMenu
              isOwner={true}
              firstId={firstDashboardId}
              myFirstId={myFirstDashboardId}
            />
          </div>
          <div className="pl-4 border-l border-gray-400 tablet:pl-8">
            <UserMenu />
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto bg-gray-200">{children}</div>
    </>
  );
}
