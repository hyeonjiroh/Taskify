import { ReactNode } from "react";
import Sidebar from "@/components/layout/sidebar/Sidebar";

import ModalProvider from "@/components/common/modal/ModalProvider";
import AlertProvider from "@/components/common/alert/AlertProvider";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen">
      <div className="w-[67px] px-[14px] py-5 border-r border-gray-400 tablet:w-[160px] tablet:px-[13px] pc:w-[300px] pc:px-3">
        <Sidebar />
      </div>
      <div className="flex flex-col flex-1 w-full overflow-hidden">
        <div className="shrink-0 h-[60px] border-b border-gray-400 tablet:h-[70px]">
          여기에 Nav 컴포넌트 넣으시면 될 것 같습니다
        </div>
        <div className="flex-1 overflow-y-auto bg-gray-200">{children}</div>
      </div>
      <ModalProvider />
      <AlertProvider />
    </div>
  );
}
