import { useState, useEffect, ChangeEvent, KeyboardEvent } from "react";
import { useTaskStore } from "@/lib/store/useTaskStore";
import { useModalStore } from "@/lib/store/useModalStore";
import { fetchTaskCardDetail, putCard } from "@/lib/apis/cardsApi";
import Modal from "@/components/common/modal/Modal";
import Input from "@/components/common/input/Input";
import DateInput from "@/components/common/input/DateInput";
import Textarea from "@/components/common/textarea/Textarea";
import TagInput from "@/components/common/input/TagInput";
import ImageInput from "@/components/common/input/ImageInput";
import ColumnDropdown from "./ColumnDropdown";
import AssigneeDropdown from "./AssigneeDropdown";
import { useDashboardStore } from "@/lib/store/useDashboardStore";

export default function EditTaskModal() {
  const { openModal } = useModalStore();
  const { selectedTaskId } = useTaskStore();
  const { dashboardId } = useDashboardStore();
  const [isLoading, setIsLoading] = useState(false);
  const accessToken = localStorage.getItem("accessToken") ?? "";

  const [isFormValid, setIsFormValid] = useState(false);
  const [selectedColumn, setSelectedColumn] = useState(0);
  const [selectedAssignee, setSelectedAssignee] = useState(0);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    tag: "",
  });
  const [tagValues, setTagValues] = useState<string[]>([]);
  const [dueDate, setDueDate] = useState("");
  const [cardImg, setItemImg] = useState<string | null>(null);

  const [initialValues, setInitialValues] = useState<{
    title: string;
    description: string;
    tags: string[];
    dueDate: string;
    imageUrl: string | null;
    columnId: number;
    assigneeUserId: number;
  } | null>(null);

  const handleRegister = async () => {
    if (!selectedTaskId) return;

    await putCard({
      token: accessToken,
      cardId: selectedTaskId,
      columnId: selectedColumn,
      assigneeUserId: selectedAssignee,
      title: formData.title,
      description: formData.description,
      dueDate: dueDate,
      tags: tagValues,
      imageUrl: cardImg,
    });

    openModal("taskDetail");
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleLoad = async () => {
    if (!selectedTaskId || isLoading) return;
    setIsLoading(true);

    try {
      const data = await fetchTaskCardDetail({
        token: accessToken,
        id: selectedTaskId,
      });

      setSelectedColumn(data.columnId);
      setSelectedAssignee(data.assignee.id);
      setFormData({
        title: data.title,
        description: data.description,
        tag: "",
      });
      setTagValues(data.tags);
      setDueDate(data.dueDate);
      setItemImg(data.imageUrl);

      setInitialValues({
        title: data.title,
        description: data.description,
        tags: data.tags,
        dueDate: data.dueDate,
        imageUrl: data.imageUrl,
        columnId: data.columnId,
        assigneeUserId: data.assignee.id,
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleLoad();
  }, []);

  useEffect(() => {
    if (!initialValues) return;

    const hasChanged =
      formData.title !== initialValues.title ||
      formData.description !== initialValues.description ||
      dueDate !== initialValues.dueDate ||
      cardImg !== initialValues.imageUrl ||
      selectedColumn !== initialValues.columnId ||
      selectedAssignee !== initialValues.assigneeUserId ||
      tagValues.join(",") !== initialValues.tags.join(",");

    const isNotEmpty =
      formData.title.trim() !== "" &&
      formData.description.trim() !== "" &&
      dueDate.trim() !== "";

    setIsFormValid(isNotEmpty && hasChanged);
  }, [
    formData,
    tagValues,
    dueDate,
    cardImg,
    selectedColumn,
    selectedAssignee,
    initialValues,
  ]);

  if (!dashboardId) return;

  return (
    <Modal
      button={{
        onConfirm: handleRegister,
        disabled: !isFormValid,
      }}
    >
      <div className="flex flex-col gap-8 tablet:w-[520px]">
        <div className="flex flex-col gap-8 tablet:flex-row">
          <ColumnDropdown
            token={accessToken}
            dashboardId={dashboardId}
            columnId={selectedColumn}
            onChange={setSelectedColumn}
          />
          <AssigneeDropdown
            token={accessToken}
            dashboardId={dashboardId}
            memberId={selectedAssignee}
            onChange={setSelectedAssignee}
          />
        </div>
        <Input
          label="제목"
          id="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <Textarea
          label="설명"
          id="description"
          value={formData.description}
          onChange={handleChange}
          required
          containerClassName="gap-1"
          labelClassName="text-2lg text-gray-800 placeholder-gray-500"
          textareaClassName="h-[70px] p-4 rounded-md text-2lg tablet:h-[110px]"
          placeholder="댓글 작성하기"
        />
        <DateInput value={dueDate} onChange={(date) => setDueDate(date)} />
        <TagInput label="태그" tags={tagValues} setTags={setTagValues} />
        <ImageInput
          label="이미지"
          variant="task"
          columnId={selectedColumn}
          initialImageUrl={cardImg}
          onImageUrlChange={(url) => setItemImg(url)}
        />
      </div>
    </Modal>
  );
}
