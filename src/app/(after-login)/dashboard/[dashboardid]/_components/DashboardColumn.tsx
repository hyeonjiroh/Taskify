import { DashboardColumn } from "@/lib/types";
import EditColumnButton from "./EditColumnButton";
import AddTaskButton from "./AddTaskButton";

export default function dashboardColumn({ id, title }: DashboardColumn) {
  return (
    <div className="py-4 border-b border-gray-300 tablet:px-5 tablet:pt-[22px] tablet:pb-5 pc:border-b-0 pc:border-r">
      <div className="flex flex-col gap-6 tablet:gap-[25px]">
        <div className="flex justify-between">
          <div className="flex gap-3 items-center">
            <div className="flex gap-2 items-center">
              <div className="w-2 h-2 rounded-full bg-violet"></div>
              <div>{title}</div>
            </div>
            <div className="flex justify-center items-center w-5 h-5 rounded bg-gray-300">
              {/* 해당 컬럼 카드 개수 표시 */}
              <div className="font-medium text-xs text-gray-600">0</div>
            </div>
          </div>
          <EditColumnButton />
        </div>
        <div className="flex flex-col gap-[10px] tablet:gap-4">
          <AddTaskButton />
        </div>
      </div>
    </div>
  );
}
