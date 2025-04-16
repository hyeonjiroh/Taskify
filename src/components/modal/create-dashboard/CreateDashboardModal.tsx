import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDashboardStore } from "@/lib/store/useDashboardStore";
import { postDashboard } from "@/lib/apis/dashboardsApi";
import Modal from "@/components/common/modal/Modal";
import Input from "@/components/common/input/Input";
import ColorPalette, {
  ColorCode,
} from "@/components/common/color-palette/ColorPalette";

export default function CreateDashboardModal() {
  const [dashboardName, setDashboardName] = useState("");
  const [selectedColor, setSelectedColor] = useState<ColorCode | "">("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const setDashboardId = useDashboardStore((state) => state.setDashboardId);
  const accessToken = localStorage.getItem("accessToken") ?? "";

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
    setLoading(true);

    try {
      const res = await postDashboard({
        token: accessToken,
        title: dashboardName,
        color: selectedColor,
      });

      const newDashboardId = res.id;

      router.push(`/dashboard/${newDashboardId}`);
      setDashboardId(newDashboardId);
    } catch (error) {
      console.error("Failed to create dashboard :", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      button={{
        onConfirm: createDashboard,
        disabled: !isFormValid,
      }}
    >
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-col gap-4 tablet:w-[584px]">
          <Input
            label="대시보드 이름"
            value={dashboardName}
            placeholder="대시보드 이름을 입력하세요"
            onChange={onDashboardNameChange}
          />
          <ColorPalette
            onSelect={onColorSelect}
            selectedColor={selectedColor}
          />
        </div>
      )}
    </Modal>
  );
}
