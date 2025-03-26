import { useIsPC, useIsMobile } from "@/lib/hooks/useCheckViewport";
import { DashboardMember } from "@/lib/types";
import MemberIcon from "./MemberIcon";
import UserIcon from "@/components/common/user-icon/UserIcon";

export default function MemberList() {
  const { members, totalCount } = mock;
  const items: DashboardMember[] = members;

  const isPC = useIsPC();
  const isMobile = useIsMobile();

  const maxVisible = isPC ? 5 : 3;
  const visibleItems = items.slice(0, maxVisible);
  const hiddenCount = totalCount - visibleItems.length;

  return (
    <div className="flex -space-x-[10px]">
      {visibleItems.map((item) => (
        <MemberIcon key={item.id} {...item} />
      ))}
      {hiddenCount > 0 && (
        <div className="flex items-center justify-center w-[34px] h-[34px] rounded-full font-semibold text-md bg-[#F4D7DA] text-[#D25B68] border-2 border-white tablet:w-[38px] tablet:h-[38px] tablet:text-lg">
          +{hiddenCount}
        </div>
      )}
    </div>
  );
}

// API 연결 시 삭제
const mock = {
  members: [
    {
      id: 18919,
      email: "test@gmail.com",
      nickname: "test",
      profileImageUrl: null,
      createdAt: "2025-03-21T18:19:11.393Z",
      updatedAt: "2025-03-21T18:19:11.393Z",
      isOwner: true,
      userId: 5292,
    },
    {
      id: 18918,
      email: "test@gmail.com",
      nickname: "hyeonji",
      profileImageUrl: null,
      createdAt: "2025-03-21T18:19:11.393Z",
      updatedAt: "2025-03-21T18:19:11.393Z",
      isOwner: true,
      userId: 5292,
    },
    {
      id: 18919,
      email: "test@gmail.com",
      nickname: "test",
      profileImageUrl: null,
      createdAt: "2025-03-21T18:19:11.393Z",
      updatedAt: "2025-03-21T18:19:11.393Z",
      isOwner: true,
      userId: 5292,
    },
    {
      id: 18918,
      email: "test@gmail.com",
      nickname: "hyeonji",
      profileImageUrl: null,
      createdAt: "2025-03-21T18:19:11.393Z",
      updatedAt: "2025-03-21T18:19:11.393Z",
      isOwner: true,
      userId: 5292,
    },
    {
      id: 18919,
      email: "test@gmail.com",
      nickname: "test",
      profileImageUrl: null,
      createdAt: "2025-03-21T18:19:11.393Z",
      updatedAt: "2025-03-21T18:19:11.393Z",
      isOwner: true,
      userId: 5292,
    },
    {
      id: 18918,
      email: "test@gmail.com",
      nickname: "hyeonji",
      profileImageUrl: null,
      createdAt: "2025-03-21T18:19:11.393Z",
      updatedAt: "2025-03-21T18:19:11.393Z",
      isOwner: true,
      userId: 5292,
    },
  ],
  totalCount: 6,
};
