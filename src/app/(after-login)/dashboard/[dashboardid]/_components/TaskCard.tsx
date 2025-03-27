"use client";

import { TaskCardList } from "@/lib/types";
import { useTaskStore } from "@/lib/store/useTaskStore";
import { useModalStore } from "@/lib/store/useModalStore";
import UserIcon from "@/components/common/user-icon/UserIcon";
import { formatDate } from "@/lib/utils/dateUtils";
import Image from "next/image";
import CalendarIcon from "../../../../../../public/icon/calendar_icon.svg";

export default function TaskCard({
  id,
  title,
  tags,
  dueDate,
  assignee,
  imageUrl,
}: TaskCardList) {
  const date = formatDate(dueDate, false);
  const { currentModal, openModal } = useModalStore();
  const { setSelectedTaskId } = useTaskStore();

  const openTaskDetailModal = () => {
    setSelectedTaskId(id);
    openModal("taskDetail");
  };

  return (
    <>
      <div
        onClick={openTaskDetailModal}
        className="flex flex-col gap-1 bg-white rounded-md border border-gray-400 p-3 cursor-pointer tablet:flex-row tablet:items-center tablet:gap-5 tablet:p-5 pc:flex-col pc:items-stretch pc:gap-4 pc:px-5 pc:py-4"
      >
        {imageUrl && (
          <div className="w-full h-[152px] relative tablet:w-[90px] tablet:h-[53px] pc:w-full pc:h-[160px]">
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
        <div className="flex flex-col flex-1 gap-[6px] tablet:gap-[10px]">
          <div className="font-medium text-md text-gray-800 tablet:text-lg">
            {title}
          </div>
          <div className="flex flex-col gap-[6px] tablet:flex-row tablet:gap-4 pc:flex-col pc:gap-2">
            <div className="h-[26px] bg-violet-8 tablet:h-[28px]">{tags}</div>
            <div className="flex justify-between flex-1 items-center">
              <div className="flex items-center gap-1 tablet:gap-[6px]">
                <Image
                  src={CalendarIcon}
                  className="w-[14px] h-[14px] tablet:w-[18px] tablet:h-[18px]"
                  alt=""
                />
                <div className="font-medium text-xs text-gray-600">{date}</div>
              </div>
              <UserIcon name={assignee.nickname} size="sm" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
