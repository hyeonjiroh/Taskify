import { useIsMobile } from "@/lib/hooks/useCheckViewport";
import LogoButton from "@/components/common/logo-button/LogoButton";
import AddButton from "./AddButton";
import SideMenuList from "./SideMenuList";

export default function Sidebar() {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col gap-[39px] tablet:gap-[57px] pc:gap-14">
      <div className="flex justify-center items-center tablet:justify-start">
        <LogoButton variant={"purple"} />
      </div>
      <div className="flex flex-col items-center gap-[22px] tablet:gap-[15px] tablet:items-stretch pc:gap-[16px]">
        <div className="flex justify-between">
          {!isMobile && (
            <div className="font-semibold text-xs text-gray-600">
              Dash Boards
            </div>
          )}
          <AddButton />
        </div>
        <SideMenuList />
      </div>
    </div>
  );
}
