import { DashboardColumn } from "@/lib/types";
import { fetchColumnList } from "@/lib/apis/columns";
import { TOKEN_1 } from "@/lib/constants/tokens";
import Column from "./_components/DashboardColumn";
import AddColumnButton from "./_components/AddColumnButton";

export default async function Page({
  params,
}: {
  params: { dashboardid: string };
}) {
  const { data } = await fetchColumnList({
    token: TOKEN_1,
    id: params.dashboardid,
  });
  const items: DashboardColumn[] = data;

  return (
    <div className="flex flex-col px-3 overflow-y-auto scrollbar-hide tablet:p-0 pc:flex-row pc:h-full pc:overflow-x-auto">
      {items.map((item) => (
        <Column key={item.id} {...item} />
      ))}
      <div className="py-4 tablet:p-5 pc:px-5 pc:py-[68px]">
        <AddColumnButton />
      </div>
    </div>
  );
}
