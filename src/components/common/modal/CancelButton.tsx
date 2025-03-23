import { useModalStore } from "@/lib/hooks/useModalStore";
import Button from "@/components/common/button/Button";

export default function CancelButton() {
  const { closeModal } = useModalStore();

  return (
    <Button
      variant="white"
      className="w-[114px] h-[54px] text-md tablet:w-[256px] tablet:text-lg"
      textColor="gray"
      onClick={closeModal}
    >
      취소
    </Button>
  );
}
