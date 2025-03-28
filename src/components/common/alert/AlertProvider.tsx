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
    </>
  );
}
