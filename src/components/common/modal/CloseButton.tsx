import { useModalStore } from "@/lib/store/useModalStore";
import Image from "next/image";
import CloseButtonIcon from "../../../../public/icon/close_icon.svg";

export default function CloseButton() {
  const { closeModal } = useModalStore();

  return (
    <button
      type="button"
      onClick={closeModal}
      className="rounded-full hover:bg-gray-300"
    >
      <Image
        src={CloseButtonIcon}
        className="w-[24px] h-[24px] tablet:w-[32px] tablet:h-[32px]"
        alt=""
      />
    </button>
  );
}
