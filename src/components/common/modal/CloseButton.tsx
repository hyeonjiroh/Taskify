"use client";

import { useIsMobile } from "@/lib/hooks/useCheckViewport";
import { useModalStore } from "@/lib/hooks/useModalStore";
import Image from "next/image";
import CloseButtonIcon from "../../../../public/icon/close_icon.svg";

export default function CloseButton() {
  const { closeModal } = useModalStore();
  const isMobile = useIsMobile();

  return (
    <button type="button" onClick={closeModal}>
      <Image
        src={CloseButtonIcon}
        width={isMobile ? 24 : 32}
        height={isMobile ? 24 : 32}
        alt=""
      />
    </button>
  );
}
