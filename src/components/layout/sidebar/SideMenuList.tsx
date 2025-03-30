"use client";

import { useEffect, useState, useRef } from "react";
import { useIntersection } from "@/lib/hooks/useIntersection";
import { DashboardList } from "@/lib/types";
import { fetchDashboardList } from "@/lib/apis/dashboardsApi";
import SideMenuItem from "./SideMenuItem";

const PAGE_SIZE = 15;

export default function SideMenuList() {
  const [items, setItems] = useState<DashboardList[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isLast, setIsLast] = useState(false);
  const observerRef = useRef<HTMLDivElement | null>(null);
  const accessToken = localStorage.getItem("accessToken") ?? "";

  const handleLoad = async () => {
    if (isLoading || isLast) return;
    setIsLoading(true);

    try {
      const { dashboards: newDashboards } = await fetchDashboardList({
        token: accessToken,
        size: PAGE_SIZE,
        page,
      });

      if (newDashboards.length === 0) {
        setIsLast(true);
      } else {
        setItems((prev) => [...prev, ...newDashboards]);
        setPage((prev) => prev + 1);
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
    <div className="flex flex-col gap-[14px] flex-grow min-h-0 overflow-y-auto whitespace-nowrap scrollbar-hide tablet:gap-[2px] pc:gap-2">
      {items.map((item, index) => (
        <div
          key={item.id}
          ref={index === items.length - 1 ? observerRef : null}
        >
          <SideMenuItem {...item} />
        </div>
      ))}
    </div>
  );
}
