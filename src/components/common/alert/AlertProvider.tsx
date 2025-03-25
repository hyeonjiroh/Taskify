"use client";

import { useRouter } from "next/navigation";
import { useAlertStore } from "@/lib/hooks/useAlertStore";
import Alert from "@/components/common/alert/Alert";

export default function AlertProvider() {
  const { currentAlert } = useAlertStore();
  const router = useRouter();

  return (
    <>
      {currentAlert === "passwordMismatch" && <Alert />}
      {currentAlert === "emailDuplicated" && <Alert />}
      {currentAlert === "signupSuccess" && (
        <Alert onConfirm={() => router.push("login")} />
      )}
      {currentAlert === "deleteColumn" && (
        <Alert onConfirm={() => alert("삭제 성공!")} /> // 컬럼 삭제 API 함수 추가
      )}
    </>
  );
}
