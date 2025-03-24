import { useState } from "react";
import Modal from "@/components/common/modal/Modal";

export default function ModifyDashboardModal() {
  // 해당 폼이 유효성 검사 후 제출 가능해질 때 해당 state 값이 false가 되도록 하기
  const [isDisabled, setIsDisabled] = useState(true);

  const buttonClick = () => {
    alert("Hi");
  };

  return (
    <Modal
      variant={"form"}
      modalTitle={"새로운 일정 관리 Taskify"}
      buttonName="생성"
      buttonClick={buttonClick}
      buttonDisabled={isDisabled}
    >
      <div>
        <div>
          Modal Content Modal Content Modal Content Modal Content Modal Content
        </div>
        <div>
          Modal Content Modal Content Modal Content Modal Content Modal Content
        </div>
        <div>
          Modal Content Modal Content Modal Content Modal Content Modal Content
        </div>
        <div>
          Modal Content Modal Content Modal Content Modal Content Modal Content
        </div>
        <div>
          Modal Content Modal Content Modal Content Modal Content Modal Content
        </div>
        <div>
          Modal Content Modal Content Modal Content Modal Content Modal Content
        </div>
        <div>
          Modal Content Modal Content Modal Content Modal Content Modal Content
        </div>
        <div>
          Modal Content Modal Content Modal Content Modal Content Modal Content
        </div>
        <div>
          Modal Content Modal Content Modal Content Modal Content Modal Content
        </div>
        <div>
          Modal Content Modal Content Modal Content Modal Content Modal Content
        </div>
        <div>
          Modal Content Modal Content Modal Content Modal Content Modal Content
        </div>
        <div>
          Modal Content Modal Content Modal Content Modal Content Modal Content
        </div>
        <div>
          Modal Content Modal Content Modal Content Modal Content Modal Content
        </div>
        <div>
          Modal Content Modal Content Modal Content Modal Content Modal Content
        </div>
        <div>
          Modal Content Modal Content Modal Content Modal Content Modal Content
        </div>
        <div>
          Modal Content Modal Content Modal Content Modal Content Modal Content
        </div>
        <div>
          Modal Content Modal Content Modal Content Modal Content Modal Content
        </div>
        <div>
          Modal Content Modal Content Modal Content Modal Content Modal Content
        </div>
        <div>
          Modal Content Modal Content Modal Content Modal Content Modal Content
        </div>
        <div>
          Modal Content Modal Content Modal Content Modal Content Modal Content
        </div>
        <div>
          Modal Content Modal Content Modal Content Modal Content Modal Content
        </div>
        <div>
          Modal Content Modal Content Modal Content Modal Content Modal Content
        </div>
        <div>
          Modal Content Modal Content Modal Content Modal Content Modal Content
        </div>
        <div>
          Modal Content Modal Content Modal Content Modal Content Modal Content
        </div>
        <div>
          Modal Content Modal Content Modal Content Modal Content Modal Content
        </div>
        <div>
          Modal Content Modal Content Modal Content Modal Content Modal Content
        </div>
        <div>
          Modal Content Modal Content Modal Content Modal Content Modal Content
        </div>
        <div>
          Modal Content Modal Content Modal Content Modal Content Modal Content
        </div>
        <div>
          Modal Content Modal Content Modal Content Modal Content Modal Content
        </div>
        <div>
          Modal Content Modal Content Modal Content Modal Content Modal Content
        </div>
      </div>
    </Modal>
  );
}
