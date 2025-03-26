import DashboardIdSetter from "./_components/DashboardIdSetter";
import DashboardName from "@/components/layout/navbar/DashboardName";
import DashboardMenu from "@/components/layout/navbar/DashboardMenu";
import MemberList from "@/components/layout/navbar/MemberList";
import UserMenu from "@/components/layout/navbar/UserMenu";

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params?: { dashboardid?: string };
}) {
  return (
    <>
      {params?.dashboardid && <DashboardIdSetter id={params.dashboardid} />}
      <div className="flex justify-between items-center shrink-0 h-[60px] pl-4 pr-2 border-b border-gray-400 tablet:h-[70px] tablet:pl-10 tablet:pr-8 pc:pl-10 pc:pr-20">
        <DashboardName />
        <div className="flex items-center">
          <div className="pr-4 tablet:pr-8 pc:pr-10">
            <DashboardMenu />
          </div>
          <div className="pr-3 tablet:pr-6 pc:pr-8">
            <MemberList />
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
