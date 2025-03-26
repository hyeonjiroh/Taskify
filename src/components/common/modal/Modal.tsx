import { ReactNode } from "react";
import { useModalStore } from "@/lib/store/useModalStore";
import { useAlertStore } from "@/lib/store/useAlertStore";
import { createPortal } from "react-dom";
import { useIsMobile } from "@/lib/hooks/useCheckViewport";
import { modalTitle, buttonName } from "./modalData";
import Button from "@/components/common/button/Button";
import MenuButton from "./MenuButton";
import CloseButton from "./CloseButton";
import clsx from "clsx";

export default function Modal({
  button,
  children,
}: {
  button?: {
    onConfirm: () => void;
    disabled: boolean;
  };
  children: ReactNode;
}) {
  const { currentModal, closeModal } = useModalStore();
  const { openAlert } = useAlertStore();

  const isMobile = useIsMobile();

  const isPage = currentModal === "taskDetail";
  const isEditColumn = currentModal === "editColumn";

  const handleConfirm = () => {
    button?.onConfirm();
    closeModal();
  };

  const deleteColumn = () => {
    closeModal();
    openAlert("deleteColumn");
  };

  if (!currentModal) return null;

  return createPortal(
    <div className="flex justify-center items-center fixed top-0 left-0 w-full h-full p-6 bg-black/70">
      <div
        className={clsx(
          "flex flex-col max-h-[80vh] px-4 rounded border-none bg-white",
          isPage
            ? "gap-2 max-w-[327px] py-4 tablet:px-8 tablet:gap-6 tablet:max-w-[1200px] tablet:py-6"
            : "gap-8 max-w-[327px] py-6 tablet:max-w-[1200px] tablet:p-8"
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
            {modalTitle[currentModal]}
          </div>
          <div className="flex items-center justify-end gap-4 tablet:gap-6">
            {isPage && <MenuButton />}
            <CloseButton />
          </div>
        </div>
        <div className="overflow-y-auto scrollbar-hide">{children}</div>
        {!isPage && (
          <div className="flex gap-[7px] tablet:gap-2">
            {/* Cancel Button or Delete Button */}
            <Button
              variant="whiteGray"
              className="flex-1 h-[54px] text-md tablet:text-lg"
              onClick={isEditColumn ? deleteColumn : closeModal}
            >
              {isEditColumn ? "삭제" : "취소"}
            </Button>
            {/* Submit Button */}
            <Button
              variant="purple"
              onClick={handleConfirm}
              className="flex-1 h-[54px] text-md tablet:text-lg"
              disabled={button?.disabled}
            >
              {buttonName[currentModal]}
            </Button>
          </div>
        )}
      </div>
    </div>,
    document.getElementById("modal-root") as HTMLElement
  );
}
