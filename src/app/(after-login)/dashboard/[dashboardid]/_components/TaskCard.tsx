"use client";

import { TaskCardList } from "@/lib/types";
import { useTaskStore } from "@/lib/store/useTaskStore";
import { useColumnStore } from "@/lib/store/useColumnStore";
import { useModalStore } from "@/lib/store/useModalStore";
import { formatDate } from "@/lib/utils/dateUtils";
import UserIcon from "@/components/common/user-icon/UserIcon";
import Image from "next/image";
import CalendarIcon from "../../../../../../public/icon/calendar_icon.svg";
import TagList from "@/components/common/tag/TagList";

type TaskCardProps = TaskCardList & {
  columnTitle: string;
};

export default function TaskCard({
  id,
  title,
  tags,
  dueDate,
  assignee,
  imageUrl,
  columnTitle,
}: TaskCardProps) {
  const date = formatDate(dueDate, false);
  const { openModal } = useModalStore();
  const { setSelectedTaskId } = useTaskStore();
  const { setSelectedColumnTitle } = useColumnStore();

  const openTaskDetailModal = () => {
    setSelectedTaskId(id);
    setSelectedColumnTitle(columnTitle);
    openModal("taskDetail");
  };

  return (
    <>
      <div
        onClick={openTaskDetailModal}
        className="flex flex-col gap-1 bg-white rounded-md border border-gray-400 p-3 cursor-pointer tablet:flex-row tablet:items-center tablet:gap-5 tablet:p-5 pc:flex-col pc:items-stretch pc:gap-4 pc:px-5 pc:py-4 pc:max-w-[314px]"
      >
        {imageUrl && (
          <div className="w-full h-[152px] relative shrink-0 tablet:w-[90px] tablet:h-[53px] pc:w-full pc:h-[160px]">
            <Image
              src={imageUrl}
              fill
              className="rounded-md"
              style={{
                objectFit: "cover",
              }}
              alt={title}
            />
          </div>
        )}
        <div className="flex flex-col gap-[6px] tablet:gap-[10px] flex-1 min-w-0">
          <div className="font-medium text-md text-gray-800 tablet:text-lg">
            {title}
          </div>
          <div className="flex flex-col gap-[6px] tablet:flex-row tablet:gap-4 pc:flex-col pc:gap-2 flex-1 min-w-0">
            <div className="flex-nowrap w-full min-w-0 overflow-x-auto scrollbar-hide">
              <TagList tags={tags} />
            </div>
            <div className="flex justify-between flex-1 items-center">
              <div className="flex items-center gap-1 pr-8 tablet:gap-[6px]">
                <Image
                  src={CalendarIcon}
                  className="w-[14px] h-[14px] tablet:w-[18px] tablet:h-[18px]"
                  alt=""
                />
                <div className="font-medium text-xs text-gray-600">{date}</div>
              </div>
              <UserIcon
                name={assignee.nickname}
                img={assignee.profileImageUrl}
                size="sm"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
