import { DashboardColumn } from "@/lib/types";
import Column from "./_components/DashboardColumn";
import AddColumnButton from "./_components/AddColumnButton";

export default function Page({ params }: { params: { dashboardid: string } }) {
  const { data } = mock;
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

// API 연결 시 삭제
const mock = {
  result: "SUCCESS",
  data: [
    {
      id: 46355,
      title: "To Do",
      teamId: "13-5",
      dashboardId: 13653,
      createdAt: "2025-03-25T15:45:07.658Z",
      updatedAt: "2025-03-25T15:45:07.658Z",
    },
    {
      id: 46356,
      title: "On Progress",
      teamId: "13-5",
      dashboardId: 13653,
      createdAt: "2025-03-25T15:45:27.219Z",
      updatedAt: "2025-03-25T15:45:27.219Z",
    },
    {
      id: 46357,
      title: "Done",
      teamId: "13-5",
      dashboardId: 13653,
      createdAt: "2025-03-25T15:45:42.051Z",
      updatedAt: "2025-03-25T15:45:42.051Z",
    },
    {
      id: 46355,
      title: "To Do",
      teamId: "13-5",
      dashboardId: 13653,
      createdAt: "2025-03-25T15:45:07.658Z",
      updatedAt: "2025-03-25T15:45:07.658Z",
    },
    {
      id: 46356,
      title: "On Progress",
      teamId: "13-5",
      dashboardId: 13653,
      createdAt: "2025-03-25T15:45:27.219Z",
      updatedAt: "2025-03-25T15:45:27.219Z",
    },
    {
      id: 46357,
      title: "Done",
      teamId: "13-5",
      dashboardId: 13653,
      createdAt: "2025-03-25T15:45:42.051Z",
      updatedAt: "2025-03-25T15:45:42.051Z",
    },
  ],
};
