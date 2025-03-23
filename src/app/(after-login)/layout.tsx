"use client";

import Sidebar from "@/components/layout/sidebar/Sidebar";
import CreateDashboardModal from "@/components/modal/create-dashboard/CreateDashboardModal";
import { useModalStore } from "@/lib/hooks/useModalStore";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  const { isOpen, closeModal } = useModalStore();

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
      {isOpen && <CreateDashboardModal onClose={closeModal} />}
    </div>
  );
}
