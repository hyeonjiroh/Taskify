"use client";

import { useIsMobile } from "@/lib/hooks/useCheckViewport";
import Image from "next/image";
import MenuButtonIcon from "../../../../public/icon/menu_icon.svg";

export default function MenuButton() {
  const isMobile = useIsMobile();

  return (
    <button type="button">
      <Image
        src={MenuButtonIcon}
        width={isMobile ? 20 : 28}
        height={isMobile ? 20 : 28}
        alt=""
      />
    </button>
  );
}
