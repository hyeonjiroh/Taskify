import { DashboardColumn, TaskCardList } from "@/lib/types";
import { fetchTaskCardList } from "@/lib/apis/cardsApi";
import { TOKEN_1 } from "@/lib/constants/tokens";
import EditColumnButton from "./EditColumnButton";
import AddTaskButton from "./AddTaskButton";
import TaskCard from "./TaskCard";

export default async function Column({ id, title }: DashboardColumn) {
  const { cards, totalCount, cursorId } = await fetchTaskCardList({
    token: TOKEN_1,
    id: id,
  });
  const items: TaskCardList[] = cards;

  // 해당 값 사용하게 되면(페이지네이션) 지울 테스트 코드
  console.log(cursorId);

  return (
    <div className="py-4 border-b border-gray-300 tablet:px-5 tablet:pt-[22px] tablet:pb-5 pc:border-b-0 pc:border-r">
      <div className="flex flex-col gap-6 tablet:gap-[25px]">
        <div className="flex justify-between">
          <div className="flex gap-3 items-center">
            <div className="flex gap-2 items-center">
              <div className="w-2 h-2 rounded-full bg-violet"></div>
              <div className="font-bold text-lg tablet:text-2lg">{title}</div>
            </div>
            <div className="flex justify-center items-center w-5 h-5 rounded bg-gray-300">
              <div className="font-medium text-xs text-gray-600">
                {totalCount}
              </div>
            </div>
          </div>
          <EditColumnButton columnId={id} columnTitle={title} />
        </div>
        <div className="flex flex-col gap-[10px] tablet:gap-4">
          <AddTaskButton />
          {items.map((item) => (
            <TaskCard key={item.id} {...item} columnTitle={title} />
          ))}
        </div>
      </div>
    </div>
  );
}
