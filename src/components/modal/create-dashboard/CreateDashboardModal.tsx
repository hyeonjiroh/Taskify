import { useState } from "react";
import Modal from "@/components/common/modal/Modal";

export default function CreateDashboardModal() {
  // 해당 폼이 유효성 검사 후 제출 가능해질 때 해당 state 값이 false가 되도록 하기
  const [isDisabled, setIsDisabled] = useState(false);

  const buttonClick = () => {
    alert("Hi");
  };

  return (
    <Modal
      variant={"form"}
      modalTitle={"새로운 대시보드"}
      buttonName="생성"
      buttonClick={buttonClick}
      isDisabled={isDisabled}
    >
      <div>
        <div>Modal Content</div>
        <div>Modal Content</div>
        <div>Modal Content</div>
        <div>Modal Content</div>
        <div>Modal Content</div>
        <div>Modal Content</div>
        <div>Modal Content</div>
        <div>Modal Content</div>
        <div>Modal Content</div>
        <div>Modal Content</div>
        <div>Modal Content</div>
        <div>Modal Content</div>
        <div>Modal Content</div>
        <div>Modal Content</div>
        <div>Modal Content</div>
        <div>Modal Content</div>
        <div>Modal Content</div>
        <div>Modal Content</div>
        <div>Modal Content</div>
        <div>Modal Content</div>
        <div>Modal Content</div>
        <div>Modal Content</div>
        <div>Modal Content</div>
        <div>Modal Content</div>
        <div>Modal Content</div>
        <div>Modal Content</div>
        <div>Modal Content</div>
        <div>Modal Content</div>
        <div>Modal Content</div>
        <div>Modal Content</div>
        <div>Modal Content</div>
        <div>Modal Content</div>
        <div>Modal Content</div>
        <div>Modal Content</div>
        <div>Modal Content</div>
        <div>Modal Content</div>
        <div>Modal Content</div>
      </div>
    </Modal>
  );
}
