import Sidebar from "@/components/layout/Sidebar";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      {/* Sidebar */}
      <Sidebar />
      <div>after-login-navigation</div>
      {/* Navigation Bar */}
      <div>after-login-navigation</div>
      {/* page content */}
      {children}
    </div>
  );
}
