import { ReactNode } from "react";
import { createPortal } from "react-dom";
import MenuButton from "./MenuButton";
import CloseButton from "./CloseButton";
import CancelButton from "./CancelButton";
import SubmitButton from "./SubmitButton";

export default function Modal({
  children,
  variant,
  modalTitle,
  buttonName,
}: {
  children: ReactNode;
  variant: "form" | "page";
  modalTitle?: string;
  buttonName?: string;
}) {
  const isForm = variant === "form";

  return createPortal(
    <div className="flex justify-center items-center fixed top-0 left-0 w-full h-full bg-black/70">
      <div className="flex flex-col gap-8 max-w-[90vh] max-h-[80vh] px-4 py-5 tablet:p-8 rounded border-none bg-white">
        <div className="flex justify-between items-center">
          <div className="font-bold text-2xl text-gray-800">{modalTitle}</div>
          <div className="flex items-center gap-4 tablet:gap-6">
            {isForm ? "" : <MenuButton />}
            <CloseButton />
          </div>
        </div>
        <div className="overflow-y-auto scrollbar-hide">{children}</div>
        {isForm ? (
          <div className="flex gap-[7px] tablet:gap-2">
            <CancelButton />
            <SubmitButton name={buttonName!} />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>,
    document.getElementById("modal-root") as HTMLElement
  );
}
