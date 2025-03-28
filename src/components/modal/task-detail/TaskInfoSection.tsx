import { useIsMobile } from "@/lib/hooks/useCheckViewport";
import { formatDate } from "@/lib/utils/dateUtils";
import UserIcon from "@/components/common/user-icon/UserIcon";

export default function TaskInfoSection({
  dueDate,
  assignee,
}: {
  dueDate: string;
  assignee: {
    nickname: string;
    profileImageUrl: string | null;
  };
}) {
  const isMobile = useIsMobile();
  const date = formatDate(dueDate, true);

  return (
    <div className="flex gap-[62px] px-4 py-[9px] rounded-lg border h-16 border-gray-400 tablet:flex-col tablet:gap-4 tablet:justify-center tablet:w-[181px] tablet:h-[155px] pc:w-[200px] pc:h-[155px]">
      <div className="flex flex-col tablet:gap-[6px]">
        <div className="font-semibold text-xs">담당자</div>
        <div className="flex gap-2 items-center">
          <UserIcon
            name={assignee.nickname}
            img={assignee.profileImageUrl}
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
  );
}
