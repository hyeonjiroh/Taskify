"use client";

import { useModalStore } from "@/lib/hooks/useModalStore";
import Image from "next/image";
import EditIcon from "../../../../../../public/icon/setting_icon.svg";

export default function EditColumnButton() {
  const { openModal } = useModalStore();

  return (
    <button
      onClick={() => openModal("editColumn")}
      className="rounded-full hover:bg-gray-300"
    >
      <Image
        src={EditIcon}
        className="w-[22px] h-[22px] tablet:w-[24px] tablet:h-[24px]"
        alt=""
      />
    </button>
  );
}
