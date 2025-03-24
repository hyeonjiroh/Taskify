"use client";

import { ReactNode } from "react";
import Sidebar from "@/components/layout/sidebar/Sidebar";
import { useModalStore } from "@/lib/hooks/useModalStore";
import CreateDashboardModal from "@/components/modal/create-dashboard/CreateDashboardModal";
import ModifyDashboardModal from "@/components/modal/modify-dashboard/ModifyDashboardModal";

export default function Layout({ children }: { children: ReactNode }) {
  const { currentModal } = useModalStore();

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-[67px] px-[14px] py-5 bg-white tablet:w-[160px] tablet:px-[13px] pc:w-[300px] pc:px-3">
        <Sidebar />
      </div>
      <div className="flex flex-col">
        {/* Navigation Bar */}
        <div>after-login-navigation</div>
        {/* page content */}
        {children}
      </div>
      {currentModal === "createDashboard" && <CreateDashboardModal />}
      {currentModal === "modifyDashboard" && <ModifyDashboardModal />}
    </div>
  );
}
