import { useIsMobile } from "@/lib/hooks/useCheckViewport";

export default function SideMenuHeader() {
  const isMobile = useIsMobile();

  return (
    <>
      {!isMobile && (
        <div className="font-semibold text-xs text-gray-600">Dash Boards</div>
      )}
    </>
  );
}
