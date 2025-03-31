"use client";

import { useEffect, useState } from "react";
import { Invitation } from "@/lib/types";
import { fetchInvitationList } from "@/lib/apis/dashboardsApi";
import Pagination from "@/components/common/pagenation-button/PagenationButton";
import InvitationCard from "./InvitationCard";
import InviteModalButton from "./InviteModalButton";

const PAGE_SIZE = 4;

export default function InvitationSection({
  id,
  token,
}: {
  id: number;
  token: string;
}) {
  const [items, setItems] = useState<Invitation[]>([]);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const totalPage = Math.floor(totalCount / PAGE_SIZE);

  const handleLoad = async () => {
    const { invitations, totalCount } = await fetchInvitationList({
      token,
      id,
      page,
      size: PAGE_SIZE,
    });
    setItems(invitations);
    setTotalCount(totalCount);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div className="flex flex-col gap-[26px] w-full p-4 rounded-lg bg-white tablet:gap-[17px] tablet:p-6">
      <div className="flex justify-between items-center tablet:items-start">
        <div className="flex flex-col gap-[14px] tablet:gap-8">
          <h2 className="font-bold text-xl text-gray-800 tablet:text-2xl">
            초대 내역
          </h2>
          <p className="font-normal text-md text-gray-500">이메일</p>
        </div>
        <div className="flex flex-col items-end gap-3 tablet:flex-row tablet:items-center tablet:gap-4">
          <div className="flex items-center gap-3 tablet:gap-4">
            <p className="font-normal text-xs text-gray-800 tablet:text-md">
              {totalPage} 페이지 중 {page}
            </p>
            <Pagination
              currentPage={1}
              totalPages={1}
              onPageChange={() => {}}
            />
          </div>
          <InviteModalButton />
        </div>
      </div>
      <div>
        {items.map((item) => (
          <InvitationCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
