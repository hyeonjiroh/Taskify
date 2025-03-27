"use client";

import { useModalStore } from "@/lib/store/useModalStore";
import CreateDashboardModal from "@/components/modal/create-dashboard/CreateDashboardModal";
import EditTaskModal from "@/components/modal/edit-task/EditTaskModal";
import TaskDetailModal from "@/components/modal/task-detail/TaskDetailModal";
import CreateTaskModal from "@/components/modal/create-task/CreateTaskModal";
import AddColumnModal from "@/components/modal/add-column/AddColumnModal";
import EditColumnModal from "@/components/modal/editColumn/EditColumnModal";
import InviteModal from "@/components/modal/invite/InviteModal";

export default function ModalProvider() {
  const { currentModal } = useModalStore();
  return (
    <>
      {currentModal === "createDashboard" && <CreateDashboardModal />}
      {currentModal === "taskDetail" && <TaskDetailModal />}
      {currentModal === "editTask" && <EditTaskModal />}
      {currentModal === "createTask" && <CreateTaskModal />}
      {currentModal === "addColumn" && <AddColumnModal />}
      {currentModal === "editColumn" && <EditColumnModal />}
      {currentModal === "invite" && <InviteModal />}
    </>
  );
}
