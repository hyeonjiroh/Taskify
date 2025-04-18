import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { DashboardColumn } from "@/lib/types";
import { useDashboardStore } from "@/lib/store/useDashboardStore";
import { useColumnStore } from "@/lib/store/useColumnStore";
import { fetchColumnList, putColumn } from "@/lib/apis/columnsApi";
import Modal from "@/components/common/modal/Modal";
import Input from "@/components/common/input/Input";

export interface ColumnListResponse {
  result: string;
  data: DashboardColumn[];
}

export default function EditColumnModal() {
  const { selectedColumnId, selectedColumnTitle } = useColumnStore();
  const [columnList, setColumnList] = useState<DashboardColumn[]>([]);
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState(selectedColumnTitle ?? "");
  const [isDuplicate, setIsDuplicate] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const { dashboardId } = useDashboardStore();
  const router = useRouter();
  const accessToken = localStorage.getItem("accessToken") ?? "";

  useEffect(() => {
    if (!dashboardId || loading) return;
    setLoading(true);

    try {
      const getData = async () => {
        const res = await fetchColumnList({
          token: accessToken,
          id: dashboardId,
        });
        setColumnList(res.data);
      };

      getData();
    } catch (error) {
      console.error("Failed to load column list :", error);
    } finally {
      setLoading(false);
    }
  }, [dashboardId]);

  useEffect(() => {
    const trimmedValue = inputValue.trim();

    // 중복된 컬럼 이름이 입력되었는지 체크
    const duplicate = columnList.some(
      (col) => col.title === trimmedValue && col.id !== selectedColumnId
    );
    setIsDuplicate(duplicate);

    const isValid = trimmedValue !== "" && !duplicate;
    setIsFormValid(isValid);
  }, [inputValue, columnList]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleEditClick = async () => {
    if (!selectedColumnId) return;
    setLoading(true);

    try {
      await putColumn({
        token: accessToken,
        title: inputValue,
        columnId: Number(selectedColumnId),
      });

      router.refresh();
    } catch (error) {
      console.error("Failed to edit column :", error);
    } finally {
      setLoading(false);
    }
  };

  if (!dashboardId) return;

  return (
    <Modal
      button={{
        onConfirm: handleEditClick,
        disabled: !isFormValid,
      }}
    >
      <div className="tablet:w-[520px]">
        <Input
          label="이름"
          placeholder="이름을 입력해 주세요"
          value={inputValue}
          onChange={handleChange}
          error={isDuplicate}
          errorMessage={isDuplicate ? "중복된 컬럼 이름입니다." : ""}
        />
      </div>
    </Modal>
  );
}
