import { useEffect, useState } from "react";
import Image from "next/image";
import Modal from "@/components/common/modal/Modal";
import TagInput from "@/components/common/input/TagInput";
import Input from "@/components/common/input/Input";
import DateInput from "@/components/common/input/DateInput";
import ImageInput from "@/components/common/input/ImageInput";
import Textarea from "@/components/common/textarea/Textarea";
import UserIcon from "@/components/common/user-icon/UserIcon";
import dropdownIcon from "../../../../public/icon/dropdown_icon.svg";
import { fetchDashboardMember } from "@/lib/apis/membersApi";
import { DashboardMember } from "@/lib/types";
import { useDashboardStore } from "@/lib/store/useDashboardStore";
import { useColumnStore } from "@/lib/store/useColumnStore";
import checkItem from "../../../../public/icon/check_icon.svg";
import { createCard } from "@/lib/apis/cardsApi";

export default function CreateDashboardModal() {
  const { dashboardId } = useDashboardStore();
  const { selectedColumnId } = useColumnStore();
  const [assignees, setAssignees] = useState<DashboardMember | null>(null);
  const [form, setForm] = useState<{ title: string; description: string }>({
    title: "",
    description: "",
  });
  const [dueDate, setDueDate] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [items, setItems] = useState<DashboardMember[]>([]);

  const [isFormValid, setIsFormValid] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const accessToken = localStorage.getItem("accessToken") ?? "";

  const fetchMembers = async () => {
    if (!dashboardId) return;

    try {
      const res = await fetchDashboardMember({
        token: accessToken,
        id: dashboardId,
        page: 1,
        size: 20,
      });

      setItems(res.members);
    } catch (error) {
      console.error("Failed to load members:", error);
    }
  };

  useEffect(() => {
    if (dashboardId !== undefined && dashboardId !== null) {
      fetchMembers();
    }
  }, [dashboardId]);

  const handleAssigneeSelect = (selectedAssignee: DashboardMember) => {
    if (!selectedAssignee) {
      console.error("선택된 담당자가 없습니다.");
      return;
    }
    setAssignees(selectedAssignee);
    setIsDropdownOpen(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const selected = items.find(
    (assignee) => assignees?.userId === assignee.userId
  );

  useEffect(() => {
    const isNotEmpty =
      form.title.trim() !== "" &&
      form.description.trim() !== "" &&
      assignees !== null &&
      dueDate.trim() !== "" &&
      tags.join() !== "";
    setIsFormValid(isNotEmpty);
  }, [form.title, form.description, assignees, dueDate, tags]);

  const buttonClick = async () => {
    if (!dashboardId) return;
    if (!selectedColumnId) return;

    try {
      await createCard({
        token: accessToken,
        assigneeUserId: Number(assignees?.userId),
        dashboardId: Number(dashboardId),
        columnId: selectedColumnId,
        title: form.title,
        description: form.description,
        dueDate,
        tags,
        imageUrl,
      });
    } catch (error) {
      console.error("카드 생성 실패:", error);
    }

    window.location.reload();
  };

  if (!selectedColumnId) return;

  return (
    <Modal
      button={{
        onConfirm: buttonClick,
        disabled: !isFormValid,
      }}
    >
      <div className="relative flex flex-col w-[271px] gap-6 tablet:w-[520px] tablet:gap-8">
        <div className="relative flex flex-col">
          <label className="block mb-2.5 text-lg font-medium text-gray-800 tablet:mb-2 tablet:text-2lg">
            담당자
          </label>
          <button
            className="w-full px-4 py-3 font-normal text-md text-gray-500 border border-gray-400 rounded-md tablet:py-[11px] tablet:text-lg"
            onClick={() => setIsDropdownOpen((prev) => !prev)}
          >
            <div className="flex justify-between">
              {selected ? (
                <div className="flex items-center gap-[6px]">
                  <UserIcon
                    name={selected.nickname}
                    img={selected.profileImageUrl}
                    size="sm"
                  />
                  <div className="font-normal text-lg text-gray-800">
                    {selected.nickname}
                  </div>
                </div>
              ) : (
                <span className="text-gray-500">담당자 선택</span>
              )}
              <Image src={dropdownIcon} width={8} height={8} alt="" />
            </div>
          </button>
        </div>

        {isDropdownOpen && (
          <ul className="border border-gray-400 rounded-md w-full tablet:w-[520px] absolute top-[89px] z-10 bg-white">
            {items.map((assignee) => (
              <li
                key={assignee.userId}
                className="px-4 py-2 hover:text-violet hover:bg-violet-8 cursor-pointer"
                onClick={() => {
                  handleAssigneeSelect(assignee);
                }}
              >
                <div className="flex gap-2 items-center">
                  <div className="relative invert brightness-75 w-4 h-3">
                    {assignees?.userId === assignee.userId && (
                      <Image
                        src={checkItem}
                        fill
                        alt="checkIcon"
                        className="mr-2"
                      />
                    )}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <UserIcon
                      name={assignee.nickname}
                      img={assignee.profileImageUrl}
                      size="sm"
                    />
                    {assignee.nickname}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
        <Input
          label="제목"
          name="title"
          value={form.title}
          onChange={handleInputChange}
          placeholder="제목을 입력해 주세요"
          required
        />
        <Textarea
          label="설명"
          name="description"
          value={form.description}
          onChange={handleInputChange}
          placeholder="설명을 입력해 주세요"
          required
          spanClassName="ml-0.5"
          containerClassName="gap-2.5 tablet:gap-2"
          labelClassName="font-medium text-lg tablet:text-2lg"
          textareaClassName="font-normal placeholder:text-gray-500 rounded-md text-md  h-[84px] px-4 py-[13px] tablet:rounded-lg tablet:h-[126px] tablet:py-[15px] tablet:text-lg"
        />
        <DateInput value={dueDate} onChange={setDueDate} />
        <TagInput label="태그" tags={tags} setTags={setTags} />
        <ImageInput
          label="이미지"
          variant="task"
          columnId={selectedColumnId}
          token={accessToken}
          onImageUrlChange={(url) => setImageUrl(url)}
        />
      </div>
    </Modal>
  );
}
