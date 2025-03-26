"use client";

import { useModalStore } from "@/lib/store/useModalStore";
import Button from "@/components/common/button/Button";
import Image from "next/image";
import AddIcon from "../../../../../../public/icon/add_icon.svg";

export default function AddTaskButton() {
  const { openModal } = useModalStore();

  return (
    <Button
      variant="whiteGray"
      onClick={() => openModal("createTask")}
      className="flex gap-3 w-full h-[32px] rounded-md tablet:h-[40px] pc:w-[314px]"
    >
      <Image
        src={AddIcon}
        className="w-[20px] h-[20px] tablet:w-[22px] tablet:h-[22px]"
        alt=""
      />
    </Button>
  );
}
