import { useEffect, useState } from "react";
import { TaskCardDetail } from "@/lib/types";
import { useTaskStore } from "@/lib/store/useTaskStore";
import { fetchTaskCardDetail } from "@/lib/apis/cardsApi";
import Modal from "@/components/common/modal/Modal";
import TaskInfoSection from "./TaskInfoSection";
import TaskContentSection from "./TaskContentSection";
import TaskCommentSection from "./TaskCommentSection";

export default function TaskDetailModal() {
  const { selectedTaskId } = useTaskStore();
  const [data, setData] = useState<TaskCardDetail | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const accessToken = localStorage.getItem("accessToken") ?? "";

  const handleLoad = async () => {
    if (!selectedTaskId || isLoading) return;
    setIsLoading(true);

    try {
      const res = await fetchTaskCardDetail({
        token: accessToken,
        id: selectedTaskId,
      });
      setData(res);
    } catch (error) {
      console.error("Failed to load card detail :", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleLoad();
  }, []);

  if (!data) return;

  const {
    id,
    title,
    description,
    tags,
    dueDate,
    assignee,
    imageUrl,
    columnId,
  } = data;

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
          <TaskCommentSection cardId={id} columnId={columnId} />
        </div>
      </div>
    </Modal>
  );
}
