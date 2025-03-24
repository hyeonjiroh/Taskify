import { useModalStore } from "@/lib/hooks/useModalStore";
import Button from "@/components/common/button/Button";

export default function DeleteButton() {
  const { closeModal } = useModalStore(); // 기존 모달 닫고 칼럼 삭제 alert 모달 띄우기

  return (
    <Button
      variant="whiteGray"
      className="flex-1 h-[54px] text-md tablet:text-lg"
      onClick={closeModal}
    >
      삭제
    </Button>
  );
}
