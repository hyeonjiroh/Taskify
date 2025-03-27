import { useEffect, useState } from "react";
import { TaskCardDetail } from "@/lib/types";
import { useTaskStore } from "@/lib/store/useTaskStore";
import { useColumnStore } from "@/lib/store/useColumnStore";
import { fetchTaskCardDetail } from "@/lib/apis/cardsApi";
import { TOKEN_1 } from "@/lib/constants/tokens";
import { useIsMobile } from "@/lib/hooks/useCheckViewport";
import { formatDate } from "@/lib/utils/dateUtils";
import Modal from "@/components/common/modal/Modal";
import UserIcon from "@/components/common/user-icon/UserIcon";
import TagList from "@/components/common/tag/TagList";

export default function TaskDetailModal() {
  const isMobile = useIsMobile();

  const { selectedColumnTitle } = useColumnStore();
  const { selectedTaskId } = useTaskStore();
  const [data, setData] = useState<TaskCardDetail | null>(null);

  useEffect(() => {
    if (!selectedTaskId) return;

    const getData = async () => {
      const res = await fetchTaskCardDetail({
        token: TOKEN_1,
        id: selectedTaskId,
      });
      setData(res);
    };

    getData();
  }, [selectedTaskId]);

  if (!selectedTaskId) return;
  if (!data) return;

  const { id, title, description, tags, dueDate, assignee, imageUrl } = data;

  const date = formatDate(dueDate, true);

  // vercel 배포를 위해 임시로 작성한 코드
  console.log(`${id} 값은 코멘트 api 요청할 때 사용하시면 됩니다!`);

  return (
    <Modal taskTitle={title}>
      <div className="">
        <div className="flex flex-col gap-4 tablet:flex-row-reverse tablet:gap-[13px] pc:gap-[14px]">
          {/* Card Info */}
          <div className="flex gap-[62px] px-4 py-[9px] rounded-lg border h-16 border-gray-400 tablet:flex-col tablet:gap-4 tablet:justify-center tablet:w-[181px] tablet:h-[155px] pc:w-[200px] pc:h-[155px]">
            <div className="flex flex-col tablet:gap-[6px]">
              <div className="font-semibold text-xs">담당자</div>
              <div className="flex gap-2 items-center">
                <UserIcon
                  name={assignee.nickname}
                  size={isMobile ? "sm" : "md"}
                />
                <div className="font-normal text-xs text-gray-800 tablet:text-md">
                  {assignee.nickname}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1 tablet:gap-[6px]">
              <div className="font-semibold text-xs">마감일</div>
              <div className="font-normal text-xs text-gray-800 tablet:text-md">
                {date}
              </div>
            </div>
          </div>
          {/* Card Content */}
          <div className="flex flex-col gap-6 pc:gap-4">
            <div className="flex items-start">
              <div className="flex items-center pr-3 tablet:pr-5">
                <div className="flex shrink-0 items-center gap-[6px] px-2 py-1 rounded-2xl bg-violet-8 tablet:px-[10px]">
                  <div className="w-[6px] h-[6px] rounded-full bg-violet"></div>
                  <div className="font-normal text-xs leading-[18px] text-violet">
                    {selectedColumnTitle}
                  </div>
                </div>
                <div className="h-4 w-[1px] bg-gray-400 ml-3 tablet:ml-5" />
              </div>
              <div className="overflow-x-auto whitespace-nowrap max-w-full scrollbar-hide">
                <TagList tags={mock} />
              </div>
            </div>
            {/* 카드 본문 */}
            <div className="rounded bg-blue w-[290px] h-[168px] tablet:w-[420px] tablet:h-[246px] pc:w-[445.25px] pc:h-[260px]">
              {data.description}
            </div>
            {/* 코멘트 */}
            <div></div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

const mock = [
  "12",
  "kadsjfald",
  "qlekjl",
  "adjflk",
  "12",
  "kadsjfald",
  "qlekjl",
  "adjflk",
];
