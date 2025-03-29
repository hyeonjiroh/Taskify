import { useModalStore } from "@/lib/store/useModalStore";
import { useColumnStore } from "@/lib/store/useColumnStore";
import Image from "next/image";
import EditIcon from "../../../../../../public/icon/setting_icon.svg";

export default function EditColumnButton({
  columnId,
  columnTitle,
}: {
  columnId: number;
  columnTitle: string;
}) {
  const { openModal } = useModalStore();
  const { setSelectedColumnId, setSelectedColumnTitle } = useColumnStore();

  const openEditColumnModal = () => {
    setSelectedColumnId(columnId);
    setSelectedColumnTitle(columnTitle);
    openModal("editColumn");
  };

  return (
    <button
      onClick={openEditColumnModal}
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
