import { useEffect, useState } from "react";
import { useDashboardStore } from "@/lib/store/useDashboardStore";
import { postComment } from "@/lib/apis/commentsApi";
import Button from "@/components/common/button/Button";
import Textarea from "@/components/common/textarea/Textarea";
import CommentList from "./CommentList";

export default function TaskCommentSection({
  cardId,
  columnId,
}: {
  cardId: number;
  columnId: number;
}) {
  const [inputValue, setInputValue] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [commentListKey, setCommentListKey] = useState(0);
  const { dashboardId } = useDashboardStore();
  const accessToken = localStorage.getItem("accessToken") ?? "";

  useEffect(() => {
    const trimmedValue = inputValue.trim();
    setIsFormValid(trimmedValue !== "");
  }, [inputValue]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const buttonClick = async () => {
    if (!dashboardId) return;

    await postComment({
      token: accessToken,
      content: inputValue.trim(),
      cardId: cardId,
      columnId: columnId,
      dashboardId: Number(dashboardId),
    });

    setInputValue("");
    setCommentListKey((prev) => prev + 1); // key 값 변경해서 CommentList 다시 마운트
  };

  if (!dashboardId) return;

  return (
    <div className="flex flex-col gap-4 w-[290px] tablet:gap-6 tablet:w-[420px] pc:w-[445px]">
      <div className="relative">
        <Textarea
          label="댓글"
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
          onClick={buttonClick}
          className="w-[84px] max-h-[28px] absolute bottom-3 right-3 font-medium text-xs leading-[18px] tablet:w-[78px] tablet:h-[32px]"
          disabled={!isFormValid}
        >
          등록
        </Button>
      </div>
      <CommentList
        id={cardId}
        key={commentListKey}
        onChange={() => setCommentListKey((prev) => prev + 1)}
      />
    </div>
  );
}
