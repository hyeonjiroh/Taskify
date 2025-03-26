import { useState } from "react";
import { useRouter } from "next/router";
import { createPortal } from "react-dom";
import ColorPalette from "@/components/common/color-palette/ColorPalette";
import Button from "@/components/common/button/Button";
import { useIsMobile } from "@/lib/hooks/useCheckViewport";
import clsx from "clsx";

type DashboardModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const DashboardModal = ({ isOpen, onClose }: DashboardModalProps) => {
  const [dashboardName, setDashboardName] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const isMobile = useIsMobile();

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

  return createPortal(
    <div className="flex justify-center items-center fixed top-0 left-0 w-full h-full p-6 bg-black/70">
      <div
        className={clsx(
          "flex flex-col max-h-[80vh] px-4 rounded border-none bg-white",
          isMobile
            ? "gap-2 max-w-[327px] py-4 tablet:px-8 tablet:gap-6 tablet:w-auto tablet:py-6"
            : "gap-8 max-w-[327px] py-6 tablet:w-auto tablet:p-8"
        )}
      >
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
    </div>,
    document.body
  );
};

const DashboardPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-6">
      <Button variant="purple" onClick={() => setIsModalOpen(true)}>
        +
      </Button>
      <DashboardModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default DashboardPage;
