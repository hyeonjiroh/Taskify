"use client";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useAlertStore } from "@/lib/store/useAlertStore";
import { useColumnStore } from "@/lib/store/useColumnStore";
import { deleteColumn } from "@/lib/apis/columnsApi";
import Alert from "@/components/common/alert/Alert";
import ROUTE from "@/lib/constants/route";

export default function AlertProvider() {
  const { currentAlert } = useAlertStore();
  const { selectedColumnId } = useColumnStore();
  const router = useRouter();
  const accessToken = Cookies.get("accessToken") ?? "";

  const handleDeleteClick = async () => {
    if (!accessToken || !selectedColumnId) return;
    await deleteColumn({
      token: accessToken,
      columnId: Number(selectedColumnId),
    });
    router.refresh();
  };

  return (
    <>
      {currentAlert === "passwordMismatch" && <Alert />}
      {currentAlert === "emailDuplicated" && <Alert />}
      {currentAlert === "signupSuccess" && (
        <Alert onConfirm={() => router.push(ROUTE.LOGIN)} />
      )}
      {currentAlert === "deleteColumn" && (
        <Alert onConfirm={handleDeleteClick} />
      )}
      {currentAlert === "loginSuccess" && (
        <Alert onConfirm={() => router.push(ROUTE.MYDASHBOARD)} />
      )}
      {currentAlert === "userNotFound" && <Alert />}
      {currentAlert === "wrongPassword" && <Alert />}
      {currentAlert === "profileUpdateSuccess" && (
        <Alert onConfirm={() => window.location.reload()} />
      )}
      {currentAlert === "profileUpdateFailed" && <Alert />}
    </>
  );
}
