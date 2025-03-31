import { useModalStore } from "@/lib/store/useModalStore";
import Button from "@/components/common/button/Button";
import Image from "next/image";
import AddIcon from "../../../../../../../public/icon/add_box_icon.svg";

export default function InviteModalButton() {
  const { openModal } = useModalStore();

  return (
    <Button
      variant="purple"
      radius="sm"
      onClick={() => {
        openModal("invite");
      }}
      className="flex gap-[6px] w-[86px] max-h-[26px] tablet:gap-2 tablet:w-[105px] tablet:max-h-[32px]"
    >
      <Image
        src={AddIcon}
        className="size-[14px] invert brightness-0 tablet:size-4"
        alt=""
      />
      <div className="font-medium text-xs leading-[18px] tablet:text-md">
        초대하기
      </div>
    </Button>
  );
}
