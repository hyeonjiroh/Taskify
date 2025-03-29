"use client";

import { useEffect, useState, useRef } from "react";
import { DashboardColumn, TaskCardList } from "@/lib/types";
import { fetchTaskCardList } from "@/lib/apis/cardsApi";
import { TOKEN_1 } from "@/lib/constants/tokens";
import EditColumnButton from "./EditColumnButton";
import AddTaskButton from "./AddTaskButton";
import TaskCard from "./TaskCard";
import { useIntersection } from "@/lib/hooks/useIntersection";

const PAGE_SIZE = 3;

export default function Column({ id, title }: DashboardColumn) {
  const [items, setItems] = useState<TaskCardList[]>([]);
  const [cursorId, setCursorId] = useState<number | null>(null);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isLast, setIsLast] = useState(false);
  const observerRef = useRef<HTMLDivElement | null>(null);

  const handleLoad = async () => {
    if (isLoading || isLast) return;
    setIsLoading(true);

    try {
      const {
        cards: newCards,
        cursorId: nextCursorId,
        totalCount,
      } = await fetchTaskCardList({
        token: TOKEN_1,
        size: PAGE_SIZE,
        cursorId,
        columnId: id,
      });

      setItems((prev) => [...prev, ...newCards]);
      setCursorId(nextCursorId);
      setTotalCount(totalCount);

      if (newCards.length < PAGE_SIZE || nextCursorId === null) {
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
    <div className="h-full py-4 border-b border-gray-300 tablet:px-5 tablet:pt-[22px] tablet:pb-5 pc:border-b-0 pc:border-r">
      <div className="flex flex-col gap-6 h-full tablet:gap-[25px]">
        <div className="flex justify-between">
          <div className="flex gap-3 items-center">
            <div className="flex gap-2 items-center">
              <div className="w-2 h-2 rounded-full bg-violet"></div>
              <div className="font-bold text-lg tablet:text-2lg">{title}</div>
            </div>
            <div className="flex justify-center items-center w-5 h-5 rounded bg-gray-300">
              <div className="font-medium text-xs text-gray-600">
                {totalCount}
              </div>
            </div>
          </div>
          <EditColumnButton columnId={id} columnTitle={title} />
        </div>
        <div className="flex flex-col gap-[10px] flex-grow min-h-0 tablet:gap-4">
          <div>
            <AddTaskButton />
          </div>
          <div className="flex flex-col gap-[10px] flex-grow min-h-0 overflow-y-auto whitespace-nowrap scrollbar-hide tablet:gap-4">
            {items.map((item, index) => (
              <div
                key={item.id}
                ref={index === items.length - 1 ? observerRef : null}
              >
                <TaskCard {...item} columnTitle={title} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
