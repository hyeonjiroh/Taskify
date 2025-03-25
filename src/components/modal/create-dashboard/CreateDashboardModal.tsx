import { useState } from "react";
import Modal from "@/components/common/modal/Modal";
import Input from "@/components/common/input/Input";

export default function CreateDashboardModal() {
  // 해당 폼이 유효성 검사 후 제출 가능해질 때 해당 state 값이 true가 되도록 하기
  const [isFormValid, setIsFormValid] = useState(false);

  // 활성화된 모달 버튼 클릭 시 실행할 함수
  const buttonClick = () => {
    alert("Hi"); // 이 부분 바꿔주시면 됩니다
    setIsFormValid(false); // 이 코드는 배포할 때 문제가 있어서 임시로 넣어놓은 코드라 삭제하시면 됩니다
  };

  return (
    <Modal
      button={{
        onConfirm: buttonClick,
        disabled: !isFormValid,
      }}
    >
      <div>
        <Input label="test" width="520px" />
      </div>
    </Modal>
  );
}
