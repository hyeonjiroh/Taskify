"use client";

import { useEffect, useState, useRef } from "react";
import { useIntersection } from "@/lib/hooks/useIntersection";
import { Invitation } from "@/lib/types";
import { fetchInvitationList } from "@/lib/apis/invitationsApi";
import Input from "@/components/common/input/Input";
import SearchIcon from "../../../../../public/icon/search_icon.svg";
import InvitationCard from "./InvitationCard";

const PAGE_SIZE = 6;

export default function InvitationSection({ token }: { token: string }) {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState<Invitation[]>([]);
  const [cursorId, setCursorId] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLast, setIsLast] = useState(false);
  const observerRef = useRef<HTMLDivElement | null>(null);

  const handleLoad = async () => {
    if (isLoading || isLast) return;
    setIsLoading(true);

    try {
      const { invitations: newInvitations, cursorId: nextCursorId } =
        await fetchInvitationList({
          token: token,
          size: PAGE_SIZE,
          cursorId,
          title: inputValue,
        });

      setItems((prev) => [...prev, ...newInvitations]);
      setCursorId(nextCursorId);

      if (newInvitations.length < PAGE_SIZE || nextCursorId === null) {
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
    <div className="flex flex-col gap-[13px] max-w-[1022px] px-4 py-6 rounded-lg bg-white tablet:gap-6 tablet:px-[28px] tablet:py-[18px] pc:py-8">
      <div className="flex flex-col gap-4 tablet:gap-[17px] pc:gap-8">
        <h2 className="font-bold text-xl text-gray-800 tablet:text-2xl">
          초대받은 대시보드
        </h2>
        <Input
          label=""
          height="sm"
          hasIcon="left"
          iconSrc={SearchIcon}
          placeholder="검색"
        />
      </div>
      <div className="flex flex-col">
        <div className="hidden tablet:flex justify-between text-gray-500 text-lg pc:pl-12">
          <span className="w-1/3">이름</span>
          <span className="w-1/3">초대자</span>
          <span className="w-1/3">수락 여부</span>
        </div>
        <div className="flex flex-col">
          {items.map((item, index) => (
            <div
              key={item.id}
              ref={index === items.length - 1 ? observerRef : null}
            >
              <InvitationCard {...item} token={token} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
