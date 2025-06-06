import { ReactNode } from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import ROUTE from "@/lib/constants/route";
import Sidebar from "@/components/layout/sidebar";
import ModalProvider from "@/components/common/modal/ModalProvider";
import AlertProvider from "@/components/common/alert/AlertProvider";

export default function Layout({ children }: { children: ReactNode }) {
  const accessToken = cookies().get("accessToken")?.value;

  if (!accessToken) {
    redirect(ROUTE.HOME);
  }

  return (
    <div className="flex h-screen">
      <div className="w-[67px] px-[14px] py-5 border-r border-gray-400 tablet:w-[160px] tablet:px-[13px] pc:w-[300px] pc:px-3">
        <Sidebar />
      </div>
      <div className="flex flex-col flex-1 w-full overflow-hidden">
        {children}
      </div>
      <ModalProvider />
      <AlertProvider />
    </div>
  );
}
