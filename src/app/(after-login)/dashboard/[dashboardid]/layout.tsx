"use client";

import { useEffect } from "react";
import { useDashboardStore } from "@/lib/store/useDashboardStore";

export default function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params?: { dashboardid?: string };
}) {
  const setDashboardId = useDashboardStore((state) => state.setDashboardId);

  useEffect(() => {
    if (params?.dashboardid) {
      setDashboardId(params.dashboardid);
    }
  }, [params?.dashboardid, setDashboardId]);

  return <>{children}</>;
}
