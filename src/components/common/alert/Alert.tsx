import { createPortal } from "react-dom";
import { useAlertStore } from "@/lib/hooks/useAlertStore";
import Button from "@/components/common/button/Button";
import clsx from "clsx";

export default function Alert({ onConfirm }: { onConfirm?: () => void }) {
  const { currentAlert, closeAlert } = useAlertStore();

  const handleConfirm = () => {
    closeAlert();
    onConfirm?.();
  };

  const alertMessages: Record<string, string> = {
    passwordMismatch: "비밀번호가 일치하지 않습니다.",
    emailDuplicated: "이미 사용 중인 이메일입니다.",
    signupSuccess: "가입이 완료되었습니다!",
    deleteColumn: "컬럼의 모든 카드가 삭제됩니다.",
  };

  if (!currentAlert) return null;

  return createPortal(
    <div className="flex justify-center items-center fixed top-0 left-0 w-full h-full p-6 bg-black/70">
      <div
        className={clsx(
          "flex flex-col gap-8 rounded-2xl border-none bg-white tablet:gap-10",
          currentAlert === "deleteColumn"
            ? "w-[327px] px-4 py-6 tablet:w-[568px] tablet:px-6"
            : "w-[272px] px-10 py-8 tablet:w-[368px] tablet:px-16"
        )}
      >
        <div className="flex justify-center font-medium text-lg text-gray-800 tablet:text-xl">
          {alertMessages[currentAlert]}
        </div>
        <div className="flex gap-[7px] tablet:gap-2">
          {/* Cancel Button */}
          {currentAlert === "deleteColumn" && (
            <Button
              variant="whiteGray"
              className="flex-1 h-[54px] text-md tablet:text-lg"
              onClick={closeAlert}
            >
              취소
            </Button>
          )}
          {/* Confirm Button or Delete Button */}
          <Button
            variant="purple"
            className="flex-1 h-[54px] text-md tablet:text-lg"
            onClick={handleConfirm}
          >
            {currentAlert === "deleteColumn" ? "삭제" : "확인"}
          </Button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root") as HTMLElement
  );
}
