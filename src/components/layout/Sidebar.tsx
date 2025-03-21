"use client";

import { useDashboardStore } from "@/lib/store/useDashboardStore";

export default function Sidebar() {
  const dashboardId = useDashboardStore((state) => state.dashboardId);

  return <div>{dashboardId} Sidebar</div>;
}
