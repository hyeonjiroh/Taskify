"use client";

import { ReactNode } from "react";
import { useAlertStore } from "@/lib/hooks/useAlertStore";
import Alert from "@/components/common/alert/Alert";
import { useRouter } from "next/navigation";

export default function Layout({ children }: { children: ReactNode }) {
  const { currentAlert } = useAlertStore();
  const router = useRouter();

  return (
    <div className="flex min-h-screen">
      <div className="flex flex-col">
        {/* page content */}
        {children}
      </div>

      {/* Alert */}
      {currentAlert === "passwordMismatch" && <Alert />}
      {currentAlert === "emailDuplicated" && <Alert />}
      {currentAlert === "signupSuccess" && (
        <Alert onConfirm={() => router.push("login")} />
      )}
    </div>
  );
}
