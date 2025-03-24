import { useModalStore } from "@/lib/hooks/useModalStore";
import Image from "next/image";
import AddButtonIcon from "../../../../public/icon/add_box_icon.svg";

export default function AddButton() {
  const { openModal } = useModalStore();

  return (
    <button
      type="button"
      onClick={() => openModal("createDashboard")}
      className="rounded hover:bg-violet-8"
    >
      <Image src={AddButtonIcon} width={20} height={20} alt="" />
    </button>
  );
}
