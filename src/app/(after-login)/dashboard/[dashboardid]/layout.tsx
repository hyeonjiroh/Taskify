import DashboardIdSetter from "./_components/DashboardIdSetter";
import { DashboardDetail } from "@/lib/types";
import { fetchDashboard } from "@/lib/apis/dashboardsApi";
import { fetchDashboardMember } from "@/lib/apis/membersApi";
import { cookies } from "next/headers";
import DashboardMenu from "@/components/layout/navbar/DashboardMenu";
import MemberList from "@/components/layout/navbar/MemberList";
import UserMenu from "@/components/layout/navbar/UserMenu";
import DashboardTitle from "@/components/layout/navbar/DashboardTitle";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params?: { dashboardid?: string };
}) {
  const accessToken = cookies().get("accessToken")?.value ?? "";

  if (!params?.dashboardid) return;

  const dashboardData: DashboardDetail = await fetchDashboard({
    token: accessToken,
    id: params.dashboardid,
  });

  const memberData = await fetchDashboardMember({
    token: accessToken,
    page: 1,
    size: null,
    id: params.dashboardid,
  });

  return (
    <>
      <DashboardIdSetter id={params.dashboardid} />
      <div className="flex justify-between items-center shrink-0 h-[60px] pl-4 pr-2 border-b border-gray-400 tablet:h-[70px] tablet:pl-10 tablet:pr-8 pc:pl-10 pc:pr-20">
        <div className="flex gap-2 items-center font-bold text-lg text-gray-800 tablet:text-xl">
          <DashboardTitle
            title={dashboardData.title}
            isOwner={dashboardData.createdByMe}
          />
        </div>
        <div className="flex items-center">
          <div className="pr-4 tablet:pr-8 pc:pr-10">
            <DashboardMenu
              isOwner={dashboardData.createdByMe}
              currentId={params.dashboardid}
            />
          </div>
          <div className="pr-3 tablet:pr-6 pc:pr-8">
            <MemberList data={memberData} />
          </div>
          <div className="pl-3 border-l border-gray-400 tablet:pl-8">
            <UserMenu />
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto bg-gray-200">{children}</div>
    </>
  );
}
