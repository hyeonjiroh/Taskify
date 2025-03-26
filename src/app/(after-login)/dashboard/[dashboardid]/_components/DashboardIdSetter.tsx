"use client";

import { useEffect } from "react";
import { useDashboardStore } from "@/lib/store/useDashboardStore";

export default function DashboardIdSetter({ id }: { id: string }) {
  const setDashboardId = useDashboardStore((state) => state.setDashboardId);

  useEffect(() => {
    setDashboardId(id);
  }, [id, setDashboardId]);

  return null;
}
