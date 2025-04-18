import { useState } from "react";
import { deleteCard } from "@/lib/apis/cardsApi";
import { useModalStore } from "@/lib/store/useModalStore";
import Image from "next/image";
import MenuButtonIcon from "../../../../public/icon/menu_icon.svg";
import { useTaskStore } from "@/lib/store/useTaskStore";

export default function MenuButton() {
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { openModal, closeModal } = useModalStore();
  const { selectedTaskId } = useTaskStore();
  const accessToken = localStorage.getItem("accessToken") ?? "";

  const openModifyModal = () => {
    closeModal();
    openModal("editTask");
  };

  const handleDelete = async () => {
    if (!selectedTaskId) return;
    setLoading(true);

    try {
      await deleteCard({
        token: accessToken,
        cardId: selectedTaskId,
      });

      closeModal();
      window.location.reload();
    } catch (error) {
      console.error("Failed to delete card :", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      onClick={() => setIsOpen((prev) => !prev)}
      className="relative cursor-pointer"
    >
      <Image
        src={MenuButtonIcon}
        className="w-[20px] h-[20px] rounded-full hover:bg-gray-300 tablet:w-[28px] tablet:h-[28px]"
        alt=""
      />
      {isOpen && (
        <div className="flex flex-col justify-between absolute top-8 right-0 p-[6px] rounded-md bg-white border border-gray-400">
          <button
            onClick={openModifyModal}
            className="w-[81px] h-8 rounded font-normal text-md text-gray-800 hover:text-violet hover:bg-violet-8"
          >
            수정하기
          </button>
          <button
            onClick={handleDelete}
            className="w-[81px] h-8 rounded font-normal text-md text-gray-800 hover:text-violet hover:bg-violet-8"
          >
            {!loading && "삭제하기"}
          </button>
        </div>
      )}
    </div>
  );
}
