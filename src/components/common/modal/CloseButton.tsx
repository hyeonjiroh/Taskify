import { useModalStore } from "@/lib/hooks/useModalStore";
import Image from "next/image";
import CloseButtonIcon from "../../../../public/icon/close_icon.svg";

export default function CloseButton({ isMobile }: { isMobile: boolean }) {
  const { closeModal } = useModalStore();

  return (
    <button
      type="button"
      onClick={closeModal}
      className="rounded-full hover:bg-gray-300"
    >
      <Image
        src={CloseButtonIcon}
        width={isMobile ? 24 : 32}
        height={isMobile ? 24 : 32}
        alt=""
      />
    </button>
  );
}
