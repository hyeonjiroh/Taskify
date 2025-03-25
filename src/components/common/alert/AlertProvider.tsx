"use client";

import { useRouter } from "next/navigation";
import { useAlertStore } from "@/lib/store/useAlertStore";
import Alert from "@/components/common/alert/Alert";
import ROUTE from "@/lib/constants/route";

export default function AlertProvider() {
  const { currentAlert } = useAlertStore();
  const router = useRouter();

  return (
    <>
      {currentAlert === "passwordMismatch" && <Alert />}
      {currentAlert === "emailDuplicated" && <Alert />}
      {currentAlert === "signupSuccess" && (
        <Alert onConfirm={() => router.push(ROUTE.LOGIN)} />
      )}
      {currentAlert === "deleteColumn" && (
        <Alert onConfirm={() => alert("삭제 성공!")} /> // 컬럼 삭제 API 함수 추가
      )}
    </>
  );
}
