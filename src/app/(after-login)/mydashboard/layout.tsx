import { DashboardList } from "@/lib/types";
import { fetchDashboardList } from "@/lib/apis/dashboards";
import { TOKEN_1 } from "@/lib/constants/tokens";
import DashboardMenu from "@/components/layout/navbar/DashboardMenu";
import UserMenu from "@/components/layout/navbar/UserMenu";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 가장 첫 번째 페이지 리스트 불러오도록 나중에 수정
  const { dashboards } = await fetchDashboardList(TOKEN_1);

  const firstDashboardId = dashboards[0]?.id;

  const myFirstDashboardId = dashboards.find(
    (dashboard: DashboardList) => dashboard.createdByMe
  )?.id;

  return (
    <>
      <div className="flex justify-between items-center shrink-0 h-[60px] pl-4 pr-2 border-b border-gray-400 tablet:h-[70px] tablet:pl-10 tablet:pr-8 pc:pl-10 pc:pr-20">
        <div className="font-bold text-lg text-gray-800 tablet:text-xl">
          내 대시보드
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
