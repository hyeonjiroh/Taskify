import { ReactNode } from "react";
import { createPortal } from "react-dom";
import { useIsMobile } from "@/lib/hooks/useCheckViewport";
import MenuButton from "./MenuButton";
import CloseButton from "./CloseButton";
import CancelButton from "./CancelButton";
import SubmitButton from "./SubmitButton";

export default function Modal({
  children,
  variant,
  modalTitle,
  buttonName,
  buttonClick,
  buttonDisabled = true,
}: {
  children: ReactNode;
  variant: "form" | "page";
  modalTitle: string;
  buttonName?: string;
  buttonClick?: () => void;
  buttonDisabled?: boolean;
}) {
  const isForm = variant === "form";
  const isMobile = useIsMobile();

  return createPortal(
    <div className="flex justify-center items-center fixed top-0 left-0 w-full h-full p-6 bg-black/70">
      <div className="flex flex-col gap-8 max-h-[80vh] px-4 py-5 tablet:p-8 rounded border-none bg-white">
        <div
          className={
            !isForm && isMobile
              ? "flex flex-col-reverse gap-4"
              : "flex justify-between items-center"
          }
        >
          <div className="font-bold text-xl text-gray-800 tablet:text-2xl">
            {modalTitle}
          </div>
          <div className="flex items-center justify-end gap-4 tablet:gap-6">
            {!isForm && <MenuButton isMobile={isMobile} />}
            <CloseButton isMobile={isMobile} />
          </div>
        </div>
        <div className="overflow-y-auto scrollbar-hide">{children}</div>
        {isForm && (
          <div className="flex gap-[7px] tablet:gap-2">
            <CancelButton />
            <SubmitButton
              name={buttonName!}
              onClick={buttonClick!}
              isDisabled={buttonDisabled}
            />
          </div>
        )}
      </div>
    </div>,
    document.getElementById("modal-root") as HTMLElement
  );
}
