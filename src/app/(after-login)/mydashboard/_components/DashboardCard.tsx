import Button from "@/components/common/button/Button";
import Image from "next/image";
import CrownIcon from "../../../../../public/icon/crown_icon.svg";
import ArrowIcon from "../../../../../public/icon/arrow_right_icon.svg";

export default function DashboardCard({
  id,
  title,
  color,
  createdByMe,
}: {
  id: number;
  title: string;
  color: string;
  createdByMe: boolean;
}) {
  return (
    <Button
      variant="whiteGray"
      className="flex justify-between items-center gap-3 w-full min-h-[58px] px-5 rounded-lg tablet:h-[68px] pc:h-[70px]"
    >
      <div className="flex gap-3 pc:gap-4">
        <div className="flex items-center">
          <div
            style={{ background: color }}
            className="w-2 h-2 rounded-full"
          ></div>
        </div>
        <div className="flex items-center gap-1 overflow-hidden tablet:gap-[6px] pc:gap-2">
          <div className="font-semibold text-md text-gray-800 truncate tablet:text-lg">
            {title}
          </div>
          {createdByMe && (
            <Image
              src={CrownIcon}
              className="w-[15px] h-3 tablet:w-[18px] tablet:h-[14px] pc:w-5 pc:h-4"
              alt=""
            />
          )}
        </div>
      </div>
      <Image src={ArrowIcon} width={18} height={18} alt="" />
    </Button>
  );
}
