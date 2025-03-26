import { useState } from "react";
import { useRouter } from "next/router";
import ColorPalette from "@/components/common/color-palette/ColorPalette";
import Button from "@/components/common/button/Button";

type DashboardModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const DashboardModal = ({ isOpen, onClose }: DashboardModalProps) => {
  const [dashboardName, setDashboardName] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleCreateDashboard = async () => {
    if (!dashboardName || !selectedColor) return;

    setLoading(true);

    const response = await fetch("/api/dashboard", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: dashboardName, color: selectedColor }),
    });

    if (response.ok) {
      const { dashboardId } = await response.json();
      router.push(`/dashboard/${dashboardId}`);
      onClose();
    } else {
      console.error("대시보드 생성 실패");
    }

    setLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white p-6 rounded-2xl w-96 shadow-lg">
        <h2 className="text-xl font-bold mb-4">대시보드 생성</h2>

        <input
          type="text"
          placeholder="대시보드 이름"
          value={dashboardName}
          onChange={(e) => setDashboardName(e.target.value)}
          className="w-full p-2 border rounded-md mb-4"
        />
        <ColorPalette onSelect={setSelectedColor} />

        <div className="mt-6 flex justify-between gap-3">
          <Button
            variant="whiteGray"
            onClick={onClose}
            className="px-4 py-2"
            radius="lg"
            disabled={loading}
          >
            취소
          </Button>

          <Button
            variant="purple"
            onClick={handleCreateDashboard}
            disabled={!dashboardName || !selectedColor || loading}
            className="px-4 py-2"
            radius="lg"
          >
            {loading ? "생성 중..." : "생성"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DashboardModal;
