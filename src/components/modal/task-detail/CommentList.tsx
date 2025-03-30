import { useEffect, useState, useRef } from "react";
import { useIntersection } from "@/lib/hooks/useIntersection";
import { Comment } from "@/lib/types";
import { fetchCommentList } from "@/lib/apis/commentsApi";
import CommentCard from "./CommentCard";

const PAGE_SIZE = 3;

export default function CommentList({
  id,
  onChange,
}: {
  id: number;
  onChange: () => void;
}) {
  const [items, setItems] = useState<Comment[]>([]);
  const [cursorId, setCursorId] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLast, setIsLast] = useState(false);
  const observerRef = useRef<HTMLDivElement | null>(null);
  const accessToken = localStorage.getItem("accessToken") ?? "";

  const handleLoad = async () => {
    if (isLoading || isLast) return;
    setIsLoading(true);

    try {
      const { comments: newComments, cursorId: nextCursorId } =
        await fetchCommentList({
          token: accessToken,
          size: PAGE_SIZE,
          cursorId,
          cardId: id,
        });

      setItems((prev) => [...prev, ...newComments]);
      setCursorId(nextCursorId);

      if (newComments.length < PAGE_SIZE || nextCursorId === null) {
        setIsLast(true);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleLoad();
  }, []);

  useIntersection({
    target: observerRef,
    onIntersect: handleLoad,
    disabled: isLast,
  });

  return (
    <div className="flex flex-col gap-2">
      {items.map((item, index) => (
        <div
          key={item.id}
          ref={index === items.length - 1 ? observerRef : null}
        >
          <CommentCard {...item} onChange={onChange} />
        </div>
      ))}
    </div>
  );
}
