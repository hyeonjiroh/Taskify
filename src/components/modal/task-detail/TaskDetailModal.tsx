import { useEffect, useState } from "react";
import { TaskCardDetail } from "@/lib/types";
import { useTaskStore } from "@/lib/store/useTaskStore";
import { fetchTaskCardDetail } from "@/lib/apis/cardsApi";
import { TOKEN_1 } from "@/lib/constants/tokens";
import Modal from "@/components/common/modal/Modal";
import TaskInfoSection from "./TaskInfoSection";
import TaskContentSection from "./TaskContentSection";

export default function TaskDetailModal() {
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

  // vercel 배포를 위해 임시로 작성한 코드
  console.log(`${id} 값은 코멘트 api 요청할 때 사용하시면 됩니다!`);

  return (
    <Modal taskTitle={title}>
      <div className="flex flex-col gap-4 tablet:flex-row-reverse tablet:gap-[13px] pc:gap-[24px]">
        <TaskInfoSection dueDate={dueDate} assignee={assignee} />
        <div className="flex flex-col gap-4">
          <TaskContentSection
            title={title}
            description={description}
            tags={tags}
            imageUrl={imageUrl}
          />
          {/* 코멘트 부분 여기에 추가해주시면 됩니다 */}
          <div></div>
        </div>
      </div>
    </Modal>
  );
}
