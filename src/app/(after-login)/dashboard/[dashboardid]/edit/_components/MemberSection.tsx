"use client";

import { useEffect, useState } from "react";
import Pagination from "@/components/common/pagination-button/PaginationButton";
import { DashboardMember } from "@/lib/types";
import Button from "@/components/common/button/Button";
import UserIcon from "@/components/common/user-icon/UserIcon";
import {
  fetchDashboardMember,
  deleteDashboardMember,
} from "@/lib/apis/membersApi";

const PAGE_SIZE = 4;

export default function MemberSection({
  id,
  token,
}: {
  id: number;
  token: string;
}) {
  const [items, setItems] = useState<DashboardMember[]>([]);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const totalPage = Math.ceil(totalCount / PAGE_SIZE);

  const fetchMembers = async (currentPage: number) => {
    try {
      setIsLoading(true);
      const { members, totalCount } = await fetchDashboardMember({
        token,
        id: id.toString(),
        page: currentPage,
        size: PAGE_SIZE,
      });
      setItems(members);
      setTotalCount(totalCount);
    } catch (error) {
      console.error("Failed to load members:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMembers(page);
  }, [page]);

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (page < totalPage) {
      setPage((prev) => prev + 1);
    }
  };

  const handleDeleteClick = async (memberId: number) => {
    try {
      setIsLoading(true);
      await deleteDashboardMember({
        token,
        memberId,
      });

      if (items.length === 1 && page > 1) {
        setPage((prev) => prev - 1);
      } else {
        const { members, totalCount } = await fetchDashboardMember({
          token,
          id: id.toString(),
          page,
          size: PAGE_SIZE,
        });
        setItems(members);
        setTotalCount(totalCount);
      }
    } catch (error) {
      console.error("Failed to delete member:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  return (
    <div className="flex flex-col gap-[26px] w-full p-4 rounded-lg bg-white tablet:gap-[17px] tablet:p-6">
      <div className="flex justify-between items-center tablet:items-start">
        <div className="flex flex-col gap-[14px] tablet:gap-8">
          <h2 className="font-bold text-xl text-gray-800 tablet:text-2xl">
            구성원
          </h2>
          <p className="font-normal text-md text-gray-500">이름</p>
        </div>
        <div className="flex flex-col items-end gap-3 tablet:flex-row tablet:items-center tablet:gap-4">
          <div className="flex items-center gap-3 tablet:gap-4">
            <p className="font-normal text-xs text-gray-800 tablet:text-md">
              {totalPage} 페이지 중 {page}
            </p>
            <Pagination
              currentPage={page}
              totalPages={totalPage}
              onPrevClick={handlePrevPage}
              onNextClick={handleNextPage}
            />
          </div>
        </div>
      </div>
      <div>
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between py-3 border-b border-gray-400 tablet:py-4"
          >
            <div className="flex items-center gap-3">
              <UserIcon
                name={item.nickname}
                img={item.profileImageUrl}
                size="md"
              />
              <span>{item.email}</span>
            </div>
            <Button
              variant="whiteViolet"
              onClick={() => handleDeleteClick(item.id)}
              className="w-[52px] max-h-[32px] tablet:w-[84px]"
            >
              삭제
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
