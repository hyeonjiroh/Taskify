import { Comment } from "@/lib/types";
import UserIcon from "@/components/common/user-icon/UserIcon";
import { useIsMobile } from "@/lib/hooks/useCheckViewport";
import { formatDate } from "@/lib/utils/dateUtils";

export default function CommentCard({
  id,
  content,
  author,
  createdAt,
}: Comment) {
  const isMobile = useIsMobile();
  const date = formatDate(createdAt, true);

  return (
    <div className=" flex gap-2 pb-2 border-b border-gray-400 tablet:gap-3 tablet:pb-3">
      <UserIcon
        name={author.nickname}
        img={author.profileImageUrl}
        size={isMobile ? "sm" : "md"}
      />
      <div className="flex flex-col gap-2 tablet:gap-[10px] pc:gap-[6px]">
        <div>
          <div className="flex gap-2 items-center">
            <div className="font-semibold text-xs text-gray-800 tablet:text-md">
              {author.nickname}
            </div>
            <div className="font-normal text-[10px] text-gray-500 tablet:text-xs">
              {date}
            </div>
          </div>
          <div className="font-normal text-xs text-gray-800 tablet:text-md">
            {content}
          </div>
        </div>
        <div className="flex gap-2 tablet:gap-3 pc:gap-[14px]">
          <div className="font-normal text-[10px] text-gray-500 underline tablet:text-xs">
            수정
          </div>
          <div className="font-normal text-[10px] text-gray-500 underline tablet:text-xs">
            삭제
          </div>
        </div>
      </div>
    </div>
  );
}
