import { useModalStore } from "@/lib/hooks/useModalStore";
import Button from "@/components/common/button/Button";

export default function CancelButton() {
  const { closeModal } = useModalStore();

  return (
    <Button
      variant="white"
      className="flex-1 h-[54px] text-md tablet:text-lg"
      textColor="gray"
      onClick={closeModal}
    >
      취소
    </Button>
  );
}
