import { ReactNode } from "react";
import AlertProvider from "@/components/common/alert/AlertProvider";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <div className="flex flex-col">
        {/* page content */}
        {children}
      </div>
      <AlertProvider />
    </div>
  );
}
