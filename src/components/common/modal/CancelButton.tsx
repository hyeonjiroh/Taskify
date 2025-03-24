import { useModalStore } from "@/lib/hooks/useModalStore";
import Button from "@/components/common/button/Button";

export default function CancelButton() {
  const { closeModal } = useModalStore();

  return (
    <Button
      variant="whiteGray"
      className="flex-1 h-[54px] text-md tablet:text-lg"
      onClick={closeModal}
    >
      취소
    </Button>
  );
}
