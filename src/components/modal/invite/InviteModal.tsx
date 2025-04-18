import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDashboardStore } from "@/lib/store/useDashboardStore";
import { postInvitation } from "@/lib/apis/dashboardsApi";
import { isValidEmail } from "@/lib/utils/validationUtils";
import Modal from "@/components/common/modal/Modal";
import Input from "@/components/common/input/Input";

export default function InviteModal() {
  const [inputValue, setInputValue] = useState("");
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const { dashboardId } = useDashboardStore();
  const router = useRouter();
  const accessToken = localStorage.getItem("accessToken") ?? "";

  // 이메일 유효성 검사는 나중에 아름님이 하시는 걸로 수정 예정
  useEffect(() => {
    const trimmedValue = inputValue.trim();

    const validEmail = isValidEmail(trimmedValue);
    setIsInvalidEmail(trimmedValue !== "" && !validEmail);

    const isValid = trimmedValue !== "" && validEmail;
    setIsFormValid(isValid);
  }, [inputValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const buttonClick = async () => {
    if (!dashboardId || loading) return;
    setLoading(true);

    try {
      postInvitation({
        token: accessToken,
        id: Number(dashboardId),
        email: inputValue,
      });

      router.refresh();
    } catch (error) {
      console.error("Failed to invite :", error);
    } finally {
      setLoading(false);
    }
  };

  if (!dashboardId) return;

  return (
    <Modal
      button={{
        onConfirm: buttonClick,
        disabled: !isFormValid,
      }}
    >
      <div className="tablet:w-[520px]">
        <Input
          label="이메일"
          placeholder="이메일을 입력해 주세요"
          value={inputValue}
          onChange={handleChange}
          error={isInvalidEmail}
          errorMessage={isInvalidEmail ? "이메일 형식으로 작성해 주세요." : ""}
        />
      </div>
    </Modal>
  );
}
