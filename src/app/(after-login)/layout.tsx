"use client";

import { ReactNode } from "react";
import { useModalStore } from "@/lib/hooks/useModalStore";
import { useAlertStore } from "@/lib/hooks/useAlertStore";
import Sidebar from "@/components/layout/sidebar/Sidebar";
import CreateDashboardModal from "@/components/modal/create-dashboard/CreateDashboardModal";
import EditTaskModal from "@/components/modal/edit-task/EditTaskModal";
import TaskDetail from "@/components/modal/task-detail/TaskDetail";
import CreateTaskModal from "@/components/modal/create-task/CreateTaskModal";
import AddColumnModal from "@/components/modal/add-column/AddColumnModal";
import EditColumnModal from "@/components/modal/editColumn/EditColumnModal";
import InviteModal from "@/components/modal/invite/InviteModal";
import Alert from "@/components/common/alert/Alert";

export default function Layout({ children }: { children: ReactNode }) {
  const { currentModal } = useModalStore();
  const { currentAlert } = useAlertStore();

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-[67px] px-[14px] py-5 border-r border-gray-400 tablet:w-[160px] tablet:px-[13px] pc:w-[300px] pc:px-3">
        <Sidebar />
      </div>
      <div className="flex flex-col flex-1 w-full overflow-hidden">
        {/* Navigation Bar */}
        <div className="shrink-0 h-[60px] border-b border-gray-400 tablet:h-[70px]">
          여기에 Nav 컴포넌트 넣으시면 될 것 같습니다
        </div>
        {/* page content */}
        <div className="flex-1 overflow-y-auto bg-gray-200">{children}</div>
      </div>

      {/* Modal */}
      {currentModal === "createDashboard" && <CreateDashboardModal />}
      {currentModal === "taskDetail" && <TaskDetail />}
      {currentModal === "editTask" && <EditTaskModal />}
      {currentModal === "createTask" && <CreateTaskModal />}
      {currentModal === "addColumn" && <AddColumnModal />}
      {currentModal === "editColumn" && <EditColumnModal />}
      {currentModal === "invite" && <InviteModal />}

      {/* Alert */}
      {currentAlert === "deleteColumn" && (
        <Alert onConfirm={() => alert("삭제 성공!")} /> // 컬럼 삭제 API 함수 추가
      )}
      {currentAlert === "signupSuccess" && <Alert />}
    </div>
  );
}
