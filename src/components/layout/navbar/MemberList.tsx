"use client";

import { useIsPC } from "@/lib/hooks/useCheckViewport";
import { DashboardMember } from "@/lib/types";
import MemberIcon from "./MemberIcon";

type MemberListProps = {
  data: {
    members: DashboardMember[];
    totalCount: number;
  };
};

export default function MemberList({ data }: MemberListProps) {
  const { members, totalCount } = data;
  const items: DashboardMember[] = members;

  const isPC = useIsPC();
  const maxVisible = isPC ? 5 : 3;

  const hasOverflow = totalCount > maxVisible;
  const visibleCount = hasOverflow ? maxVisible - 1 : maxVisible;

  const visibleItems = items.slice(0, visibleCount);
  const hiddenCount = totalCount - visibleItems.length;

  return (
    <div className="flex -space-x-[10px]">
      {visibleItems.map((item, index) => (
        <div key={item.id} className="relative" style={{ zIndex: index }}>
          <MemberIcon {...item} />
        </div>
      ))}
      {hiddenCount > 0 && (
        <div className="flex items-center justify-center w-[34px] h-[34px] rounded-full font-semibold text-md bg-[#F4D7DA] text-[#D25B68] border-2 border-white z-10 tablet:w-[38px] tablet:h-[38px] tablet:text-lg">
          +{hiddenCount}
        </div>
      )}
    </div>
  );
}
