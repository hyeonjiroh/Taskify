import { Dashboard } from "@/lib/types";
import SideMenuItem from "./SideMenuItem";

export default function SideMenuList() {
  const { dashboards, totalCount, cursorId } = mock;
  const items: Dashboard[] = dashboards;

  // 해당 값들 사용하게 되면 지울 테스트 코드들
  console.log(totalCount);
  console.log(cursorId);

  return (
    <div className="flex flex-col gap-[14px] tablet:gap-[2px] pc:gap-2">
      {items.map((item) => (
        <SideMenuItem key={item.id} {...item} />
      ))}
    </div>
  );
}

// API 연결 시 삭제
const mock = {
  dashboards: [
    {
      id: 13655,
      title: "연간 계획",
      color: "#FFA500",
      userId: 5293,
      createdAt: "2025-03-21T19:27:03.787Z",
      updatedAt: "2025-03-21T19:27:03.787Z",
      createdByMe: false,
    },
    {
      id: 13654,
      title: "주간 계획",
      color: "#E876EA",
      userId: 5292,
      createdAt: "2025-03-21T19:28:19.684Z",
      updatedAt: "2025-03-21T19:28:19.684Z",
      createdByMe: true,
    },
    {
      id: 13653,
      title: "프로젝트",
      color: "#760DDE",
      userId: 5292,
      createdAt: "2025-03-21T19:27:03.787Z",
      updatedAt: "2025-03-21T19:27:03.787Z",
      createdByMe: true,
    },
  ],
  totalCount: 3,
  cursorId: null,
};
