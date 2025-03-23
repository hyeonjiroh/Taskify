import { ReactNode } from "react";
import { createPortal } from "react-dom";
import MenuButton from "./MenuButton";
import CloseButton from "./CloseButton";

export default function Modal({
  children,
  isMenu,
}: {
  children: ReactNode;
  isMenu: boolean;
}) {
  return createPortal(
    <div className="flex justify-center items-center fixed top-0 left-0 w-full h-full bg-black/70">
      <div className="px-4 py-5 tablet:p-8 rounded border-none bg-white">
        <div className="flex justify-between">
          <div>모달 제목</div>
          <div className="flex justify-between items-center gap-4 tablet:gap-6">
            {isMenu ? <MenuButton /> : ""}
            <CloseButton />
          </div>
        </div>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root") as HTMLElement
  );
}
