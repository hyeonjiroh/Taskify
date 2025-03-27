import { useState } from "react";
import Modal from "@/components/common/modal/Modal";
import Input from "@/components/common/input/Input";
import {
  ColorPalette,
  ColorCode
} from "@/components/common/color-palette/ColorPalette";

export default function CreateDashboardModal() {
  const [dashboardName, setDashboardName] = useState("");
  const [selectedColor, setSelectedColor] = useState<ColorCode | "">("");
  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = (name: string, color: ColorCode | "") => {
    setIsFormValid(Boolean(name.trim()) && Boolean(color?.trim()));
  };

  const onDashboardNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDashboardName(value);
    validateForm(value, selectedColor);
  };

  const onColorSelect = (color: ColorCode | "") => {
    setSelectedColor(() => {
      validateForm(dashboardName, color);
      return color;
    });
  };

  const createDashboard = () => {
    alert(`대시보드 생성됨: 이름 - ${dashboardName}, 색상 - ${selectedColor}`);
    setDashboardName("");
    setSelectedColor("");
    setIsFormValid(false);
  };

  return (
    <Modal
      button={{
        onConfirm: createDashboard,
        disabled: !isFormValid,
      }}
    >
      <div className="w-[520px] p-6 bg-white rounded-lg shadow-lg">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900">새로운 대시보드</h2>
        </div>

        <div className="mb-4">
          <Input
            label="대시보드 이름"
            value={dashboardName}
            placeholder="대시보드 이름을 입력하세요"
            onChange={onDashboardNameChange}
            width="100%"
          />
        </div>

        <div className="mb-6">
          <p className="text-md font-medium text-gray-700 mb-2">색상 선택</p>
          <ColorPalette
            onSelect={onColorSelect}
            selectedColor={selectedColor}
          />
        </div>
      </div>
    </Modal>
  );
}
