import { ReactNode } from "react";
import { ModalKey } from "@/lib/hooks/useModalStore";
import { createPortal } from "react-dom";
import { useIsMobile } from "@/lib/hooks/useCheckViewport";
import MenuButton from "./MenuButton";
import CloseButton from "./CloseButton";
import CancelButton from "./CancelButton";
import DeleteButton from "./DeleteButton";
import SubmitButton from "./SubmitButton";
import clsx from "clsx";

export default function Modal({
  children,
  variant,
  modalTitle,
  buttonName,
  buttonClick,
  buttonDisabled = true,
}: {
  children: ReactNode;
  variant: Exclude<ModalKey, null>;
  modalTitle: string;
  buttonName?: string;
  buttonClick?: () => void;
  buttonDisabled?: boolean;
}) {
  const isMobile = useIsMobile();
  const isPage = variant === "taskDetail";
  const isEditColumn = variant === "editColumn";

  return createPortal(
    <div className="flex justify-center items-center fixed top-0 left-0 w-full h-full p-6 bg-black/70">
      <div
        className={clsx(
          "flex flex-col max-h-[80vh] px-4 rounded border-none bg-white",
          isPage
            ? "gap-2 py-4 tablet:px-8 tablet:gap-6 tablet:py-6"
            : "gap-8 py-6 tablet:p-8"
        )}
      >
        <div
          className={
            isPage && isMobile
              ? "flex flex-col-reverse gap-4"
              : "flex justify-between items-center"
          }
        >
          <div className="font-bold text-xl text-gray-800 tablet:text-2xl">
            {modalTitle}
          </div>
          <div className="flex items-center justify-end gap-4 tablet:gap-6">
            {isPage && <MenuButton isMobile={isMobile} />}
            <CloseButton isMobile={isMobile} />
          </div>
        </div>
        <div className="overflow-y-auto scrollbar-hide">{children}</div>
        {!isPage && (
          <div className="flex gap-[7px] tablet:gap-2">
            {isEditColumn ? <DeleteButton /> : <CancelButton />}
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
