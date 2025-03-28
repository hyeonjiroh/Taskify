import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { postDashboard } from "@/lib/apis/dashboardsApi";
import { TOKEN_1 } from "@/lib/constants/tokens";
import Modal from "@/components/common/modal/Modal";
import Input from "@/components/common/input/Input";
import ColorPalette, {
  ColorCode,
} from "@/components/common/color-palette/ColorPalette";

export default function CreateDashboardModal() {
  const [dashboardName, setDashboardName] = useState("");
  const [selectedColor, setSelectedColor] = useState<ColorCode | "">("");
  const [isFormValid, setIsFormValid] = useState(false);
  const router = useRouter();

  const onColorSelect = (color: ColorCode | "") => {
    setSelectedColor(() => {
      return color;
    });
  };

  useEffect(() => {
    const trimmedValue = dashboardName.trim();
    const isValid = trimmedValue !== "" && selectedColor !== "";
    setIsFormValid(isValid);
  }, [dashboardName, selectedColor]);

  const onDashboardNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDashboardName(e.target.value);
  };

  const createDashboard = async () => {
    const res = await postDashboard({
      token: TOKEN_1,
      title: dashboardName,
      color: selectedColor,
    });

    const newDashboardId = res.id;

    router.push(`/dashboard/${newDashboardId}`);
  };

  return (
    <Modal
      button={{
        onConfirm: createDashboard,
        disabled: !isFormValid,
      }}
    >
      <div className="flex flex-col gap-4 tablet:w-[584px]">
        <Input
          label="대시보드 이름"
          value={dashboardName}
          placeholder="대시보드 이름을 입력하세요"
          onChange={onDashboardNameChange}
        />
        <ColorPalette onSelect={onColorSelect} selectedColor={selectedColor} />
      </div>
    </Modal>
  );
}
