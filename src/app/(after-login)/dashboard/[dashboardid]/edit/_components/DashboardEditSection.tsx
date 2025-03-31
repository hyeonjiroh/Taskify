"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDashboardStore } from "@/lib/store/useDashboardStore";
import { DashboardDetail } from "@/lib/types";
import { fetchDashboard, putDashboard } from "@/lib/apis/dashboardsApi";
import ColorPalette, {
  ColorCode,
} from "@/components/common/color-palette/ColorPalette";
import Input from "@/components/common/input/Input";
import Button from "@/components/common/button/Button";

export default function DashboardEditSection({
  id,
  token,
}: {
  id: number;
  token: string;
}) {
  const [data, setData] = useState<DashboardDetail | null>(null);
  const [dashboardName, setDashboardName] = useState("");
  const [selectedColor, setSelectedColor] = useState<ColorCode | "">("");
  const [isFormValid, setIsFormValid] = useState(false);
  const router = useRouter();
  const setDashboardId = useDashboardStore((state) => state.setDashboardId);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchDashboard({
        token,
        id: String(id),
      });
      setData(data);
      setDashboardName(data.title);
      setSelectedColor(data.color);
    };

    getData();
  }, []);

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

  const editDashboard = async () => {
    await putDashboard({
      token,
      title: dashboardName,
      color: selectedColor,
      id,
    });

    window.location.replace(`/dashboard/${id}`);
    setDashboardId(String(id));
  };

  if (!data) return;

  return (
    <div className="w-full p-4 rounded-lg bg-white tablet:p-6">
      <div className="flex flex-col gap-10 tablet:gap-6">
        <div className="font-bold text-xl text-gray-800 tablet:text-2xl">
          {data.title}
        </div>
        <div className="flex flex-col gap-8 tablet:gap-10">
          <div className="flex flex-col gap-4">
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
          <Button
            variant="purple"
            onClick={editDashboard}
            disabled={!isFormValid}
          >
            변경
          </Button>
        </div>
      </div>
    </div>
  );
}
