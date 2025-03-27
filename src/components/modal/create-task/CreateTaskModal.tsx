import { useState } from "react";
import Modal from "@/components/common/modal/Modal";
import TagInput from "@/components/common/input/TagInput";

export default function CreateDashboardModal() {
  // 해당 폼이 유효성 검사 후 제출 가능해질 때 해당 state 값이 true가 되도록 하기
  const [isFormValid, setIsFormValid] = useState(false);

  // TagInput 컴포넌트에 전달할 state
  const [tags, setTags] = useState<string[]>([]);

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
        {/* 아래는 임시로 넣어본 TagInput 코드입니다 */}
        <TagInput label="태그" tags={tags} setTags={setTags} />
      </div>
    </Modal>
  );
}
