import { useEffect, useState } from "react";
import { Comment } from "@/lib/types";
import { putComment, deleteComment } from "@/lib/apis/commentsApi";
import { useIsMobile } from "@/lib/hooks/useCheckViewport";
import { formatDate } from "@/lib/utils/dateUtils";
import UserIcon from "@/components/common/user-icon/UserIcon";
import Button from "@/components/common/button/Button";
import Textarea from "@/components/common/textarea/Textarea";

type CommentCardProps = Comment & {
  onChange: () => void;
};

export default function CommentCard({
  id,
  content,
  author,
  createdAt,
  onChange,
}: CommentCardProps) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [inputValue, setInputValue] = useState(content);
  const [isFormValid, setIsFormValid] = useState(false);
  const isMobile = useIsMobile();
  const date = formatDate(createdAt, true);
  const accessToken = localStorage.getItem("accessToken") ?? "";

  useEffect(() => {
    const trimmedValue = inputValue.trim();
    setIsFormValid(trimmedValue !== "");
  }, [inputValue]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  const handleEditComment = async () => {
    await putComment({
      token: accessToken,
      content: inputValue.trim(),
      commentId: id,
    });

    setInputValue("");
    onChange();
  };

  const handleDeleteComment = () => {
    deleteComment({
      token: accessToken,
      commentId: id,
    });

    onChange();
  };

  return (
    <div className=" flex gap-2 pb-2 border-b border-gray-400 tablet:gap-3 tablet:pb-3">
      <div className="shrink-0">
        <UserIcon
          name={author.nickname}
          img={author.profileImageUrl}
          size={isMobile ? "sm" : "md"}
        />
      </div>
      <div className="flex flex-col gap-2 w-full tablet:gap-[10px] pc:gap-[6px]">
        <div>
          <div className="flex gap-2 items-center">
            <div className="font-semibold text-xs text-gray-800 tablet:text-md">
              {author.nickname}
            </div>
            <div className="font-normal text-[10px] text-gray-500 tablet:text-xs">
              {date}
            </div>
          </div>
          {isEditMode ? (
            <div className="relative">
              <Textarea
                label=""
                value={inputValue}
                containerClassName="gap-1"
                labelClassName="font-medium text-md tablet:text-lg"
                textareaClassName="h-[70px] p-4 rounded-md text-xs tablet:h-[110px] tablet:text-md"
                placeholder="댓글 작성하기"
                onChange={handleChange}
              />
              <Button
                variant="whiteViolet"
                radius="sm"
                onClick={handleEditComment}
                className="w-[84px] max-h-[28px] absolute bottom-3 right-3 font-medium text-xs leading-[18px] tablet:w-[78px] tablet:h-[32px]"
                disabled={!isFormValid}
              >
                등록
              </Button>
            </div>
          ) : (
            <div className="font-normal text-xs text-gray-800 tablet:text-md">
              {content}
            </div>
          )}
        </div>
        <div className="flex gap-2 tablet:gap-3 pc:gap-[14px]">
          <div
            onClick={handleEditMode}
            className="font-normal text-[10px] text-gray-500 underline cursor-pointer tablet:text-xs"
          >
            수정
          </div>
          <div
            onClick={handleDeleteComment}
            className="font-normal text-[10px] text-gray-500 underline cursor-pointer tablet:text-xs"
          >
            삭제
          </div>
        </div>
      </div>
    </div>
  );
}
