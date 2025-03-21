// lib/store/useDashboardStore.ts
import { create } from "zustand";

type DashboardState = {
  dashboardId: string | null;
  setDashboardId: (id: string) => void;
};

export const useDashboardStore = create<DashboardState>((set) => ({
  dashboardId: null,
  setDashboardId: (id) => set({ dashboardId: id }),
}));
