"use client";

import { ReactNode } from "react";
import Sidebar from "@/components/layout/sidebar/Sidebar";
import { useModalStore } from "@/lib/hooks/useModalStore";
import CreateDashboardModal from "@/components/modal/create-dashboard/CreateDashboardModal";
import EditTaskModal from "@/components/modal/edit-task/EditTaskModal";
import TaskDetail from "@/components/modal/task-detail/TaskDetail";
import CreateTaskModal from "@/components/modal/create-task/CreateTaskModal";
import AddColumnModal from "@/components/modal/add-column/AddColumnModal";
import EditColumnModal from "@/components/modal/editColumn/EditColumnModal";
import InviteModal from "@/components/modal/invite/InviteModal";

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
      {currentModal === "createDashboard" && (
        <CreateDashboardModal modalType={currentModal} />
      )}
      {currentModal === "taskDetail" && <TaskDetail modalType={currentModal} />}
      {currentModal === "editTask" && (
        <EditTaskModal modalType={currentModal} />
      )}
      {currentModal === "createTask" && (
        <CreateTaskModal modalType={currentModal} />
      )}
      {currentModal === "addColumn" && (
        <AddColumnModal modalType={currentModal} />
      )}
      {currentModal === "editColumn" && (
        <EditColumnModal modalType={currentModal} />
      )}
      {currentModal === "invite" && <InviteModal modalType={currentModal} />}
    </div>
  );
}
