import { ReactNode } from "react";
import AlertProvider from "@/components/common/alert/AlertProvider";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full min-h-screen">
      <div>
        {/* page content */}
        {children}
      </div>
      <AlertProvider />
    </div>
  );
}
