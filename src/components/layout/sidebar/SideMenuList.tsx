import { DashboardList } from "@/lib/types";
import { fetchDashboardList } from "@/lib/apis/dashboardsApi";
import { TOKEN_1 } from "@/lib/constants/tokens";
import SideMenuItem from "./SideMenuItem";

export default async function SideMenuList() {
  const { dashboards, totalCount, cursorId } =
    await fetchDashboardList(TOKEN_1);
  const items: DashboardList[] = dashboards;

  // 해당 값들 사용하게 되면 지울 테스트 코드들
  console.log(totalCount);
  console.log(cursorId);

  return (
    <div className="flex flex-col gap-[14px] tablet:gap-[2px] pc:gap-2">
      {items.map((item) => (
        <SideMenuItem key={item.id} {...item} />
      ))}
    </div>
  );
}
