import { useModalStore } from "@/lib/store/useModalStore";
import Button from "@/components/common/button/Button";
import Image from "next/image";
import AddIcon from "../../../../../public/icon/add_icon.svg";

export default function AddDashboardButton() {
  const { openModal } = useModalStore();

  return (
    <Button
      variant="whiteGray"
      onClick={() => openModal("createDashboard")}
      className="flex gap-3 w-full min-h-[58px] rounded-lg tablet:h-[68px] pc:h-[70px]"
    >
      <div className="font-semibold text-md text-gray-800 tablet:text-lg">
        새로운 대시보드
      </div>
      <Image
        src={AddIcon}
        className="w-[20px] h-[20px] tablet:w-[22px] tablet:h-[22px]"
        alt=""
      />
    </Button>
  );
}
