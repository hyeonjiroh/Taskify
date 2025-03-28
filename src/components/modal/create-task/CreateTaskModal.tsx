import { useState } from "react";
import Image from "next/image";
import Modal from "@/components/common/modal/Modal";
import TagInput from "@/components/common/input/TagInput";
import Input from "@/components/common/input/Input";
import DateInput from "@/components/common/input/DateInput";
import ImageInput from "@/components/common/input/ImageInput";
import Textarea from "@/components/common/textarea/Textarea";
import dropdownIcon from "../../../../public/icon/dropdown_icon.svg";

export default function CreateDashboardModal() {
  // 해당 폼이 유효성 검사 후 제출 가능해질 때 해당 state 값이 true가 되도록 하기
  const [isFormValid, setIsFormValid] = useState(false);

  // TagInput 컴포넌트에 전달할 state
  const [tags, setTags] = useState<string[]>([]);
  const [selectedManager, setSelectedManager] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const managers = ["김경민", "노현지", "이아름", "이재혁", "임지혜"];

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
      <div className="flex flex-col w-[271px] gap-6 tablet:w-[520px] tablet:gap-8">
        <div className="relative flex flex-col">
          <label className="block mb-2.5 text-lg font-medium text-gray-800 tablet:mb-2 tablet:text-2lg">
            담당자
          </label>
          <button
            className="w-full px-4 py-3 font-normal text-md text-gray-500 border border-gray-400 rounded-md tablet:py-[11px] tablet:text-lg"
            onClick={() => setIsDropdownOpen((prev) => !prev)}
          >
            <div className="flex justify-between">
              <span>{selectedManager || "이름을 입력해 주세요"}</span>
              <Image src={dropdownIcon} width={8} height={8} alt="" />
            </div>
          </button>
        </div>

        {isDropdownOpen && (
          <ul className="border border-gray-400 rounded-md">
            {managers.map((manager) => (
              <li
                key={manager}
                className="px-4 py-2 hover:text-violet hover:bg-violet-8 cursor-pointer"
                onClick={() => {
                  setSelectedManager(manager);
                  setIsDropdownOpen(false);
                }}
              >
                {manager}
              </li>
            ))}
          </ul>
        )}
        <Input label="제목" placeholder="제목을 입력해 주세요" required />
        <Textarea
          label="설명"
          placeholder="설명을 입력해 주세요"
          required
          spanClassName="ml-0.5"
          containerClassName="gap-2.5 tablet:gap-2"
          labelClassName="font-medium text-lg tablet:text-2lg"
          textareaClassName="font-normal placeholder:text-gray-500 rounded-md text-md  h-[84px] px-4 py-[13px] tablet:rounded-lg tablet:h-[126px] tablet:py-[15px] tablet:text-lg"
        />
        <DateInput />
        <TagInput label="태그" tags={tags} setTags={setTags} />
        <ImageInput label="이미지" variant="task" columnId={46355} />
      </div>
    </Modal>
  );
}
