import LogoButton from "@/components/common/logo-button/LogoButton";
import AddButton from "./AddButton";
import SideMenuHeader from "./SideMenuHeader";
import SideMenuList from "./SideMenuList";

export default function Sidebar() {
  return (
    <div className="flex flex-col gap-[39px] h-full tablet:gap-[57px] pc:gap-14">
      <div className="flex justify-center items-center tablet:justify-start">
        <LogoButton variant={"purple"} />
      </div>
      <div className="flex flex-col items-center gap-[22px] flex-grow min-h-0 tablet:gap-[15px] tablet:items-stretch pc:gap-[16px]">
        <div className="flex justify-between">
          <SideMenuHeader />
          <AddButton />
        </div>
        <SideMenuList />
      </div>
    </div>
  );
}
