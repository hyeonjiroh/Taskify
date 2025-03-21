import Sidebar from "@/components/layout/Sidebar";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-[67px] px-[14px] py-5 bg-white tablet:w-[160px] tablet:px-[13px] pc:w-[300px] pc:px-3">
        <Sidebar />
      </div>
      <div className="flex flex-col">
        {/* Navigation Bar */}
        <div>after-login-navigation</div>
        {/* page content */}
        {children}
      </div>
    </div>
  );
}
