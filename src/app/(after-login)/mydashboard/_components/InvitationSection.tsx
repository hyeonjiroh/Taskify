"use client";

import { useEffect, useState, useRef } from "react";
import { useIntersection } from "@/lib/hooks/useIntersection";
import { Invitation } from "@/lib/types";
import { fetchInvitationList } from "@/lib/apis/invitationsApi";
import Input from "@/components/common/input/Input";
import InvitationCard from "./InvitationCard";
import Image from "next/image";
import SearchIcon from "../../../../../public/icon/search_icon.svg";
import EmptyImg from "../../../../../public/mydashboardPage/empty_invitation.svg";

const PAGE_SIZE = 6;

export default function InvitationSection({ token }: { token: string }) {
  const [inputValue, setInputValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
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
          title: searchQuery,
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
    setItems([]);
    setCursorId(null);
    setIsLast(false);
  }, [searchQuery]);

  useEffect(() => {
    handleLoad();
  }, [items, cursorId]);

  useIntersection({
    target: observerRef,
    onIntersect: handleLoad,
    disabled: isLast,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setSearchQuery(inputValue);
    }
  };

  return (
    <div className="flex flex-col gap-[13px] max-w-[1022px] min-h-[327px] px-4 py-6 rounded-lg bg-white tablet:gap-6 tablet:min-h-[390px] tablet:px-[28px] tablet:py-[18px] pc:py-8">
      <div className="flex flex-col gap-4 tablet:gap-[17px] pc:gap-8">
        <h2 className="font-bold text-xl text-gray-800 tablet:text-2xl">
          초대받은 대시보드
        </h2>
        <Input
          label=""
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          height="sm"
          hasIcon="left"
          iconSrc={SearchIcon}
          placeholder="검색"
        />
      </div>
      {items.length === 0 && (
        <div className="flex flex-col flex-1 justify-center items-center gap-4">
          <div>
            <Image
              src={EmptyImg}
              className="size-[60px] tablet:size-[100px]"
              alt=""
            />
          </div>
          <div className="font-normal text-xs text-gray-500 tablet:text-2lg">
            아직 초대받은 대시보드가 없어요
          </div>
        </div>
      )}
      {items.length > 0 && (
        <>
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
        </>
      )}
    </div>
  );
}
