import { useEffect, useState } from "react";
import { TaskCardDetail } from "@/lib/types";
import { useTaskStore } from "@/lib/store/useTaskStore";
import { fetchTaskCardDetail } from "@/lib/apis/cards";
import { TOKEN_1 } from "@/lib/constants/tokens";
import Modal from "@/components/common/modal/Modal";

export default function TaskDetail() {
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

  if (!selectedTaskId) return null;
  if (!data) return null;

  return (
    <Modal>
      <div className="">
        <div className="flex flex-col gap-4 tablet:flex-row-reverse tablet:gap-[13px] pc:gap-[14px]">
          {/* Card Info */}
          <div className="rounded border h-16 border-gray-400 tablet:w-[181px] tablet:h-[155px] pc:w-[200px] pc:h-[155px]"></div>
          {/* Card Content */}
          <div className="flex flex-col gap-6 pc:gap-4">
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
