import { useRouter } from "next/navigation";
import { useDashboardStore } from "@/lib/store/useDashboardStore";
import { Invitation } from "@/lib/types";
import { putInvitation } from "@/lib/apis/invitationsApi";
import Button from "@/components/common/button/Button";

type InvitationCardProps = Invitation & {
  token: string;
};

export default function InvitationCard({
  id,
  inviter,
  dashboard,
  token,
}: InvitationCardProps) {
  const newDashboardId = String(dashboard.id);
  const router = useRouter();
  const setDashboardId = useDashboardStore((state) => state.setDashboardId);

  const handleApproveInvite = async () => {
    await putInvitation({
      token,
      invitationId: id,
      inviteAccepted: true,
    });

    router.push(`/dashboard/${newDashboardId}`);
    setDashboardId(newDashboardId);
  };

  const handleRejectInvite = async () => {
    await putInvitation({
      token,
      invitationId: id,
      inviteAccepted: false,
    });

    window.location.reload();
  };

  return (
    <div className="flex flex-col gap-[14px] border-b border-gray-400 py-[14px] tablet:flex-row tablet:gap-0 tablet:justify-between tablet:py-5 pc:pl-12 ">
      <div className="flex flex-col tablet:flex-row tablet:justify-between tablet:flex-grow">
        <div className="flex gap-6 tablet:w-1/2">
          <div className="w-[38px] font-normal text-md text-gray-500 tablet:hidden">
            이름
          </div>
          <div className="font-normal text-md text-gray-800 tablet:text-lg">
            {dashboard.title}
          </div>
        </div>
        <div className="flex gap-6 tablet:w-1/2">
          <div className="w-[38px] font-normal text-md text-gray-500 tablet:hidden">
            초대자
          </div>
          <div className="font-normal text-md text-gray-800 tablet:text-lg">
            {inviter.nickname}
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-[10px] tablet:justify-start tablet:tablet:w-1/3 tablet:relative tablet:left-[-44px] pc:left-[-56px]">
        <Button
          variant="purple"
          onClick={handleApproveInvite}
          radius="sm"
          className="flex-1 max-h-[32px] tablet:max-w-[72px] pc:max-w-[84px]"
        >
          <div className="font-medium text-xs tablet:text-md">수락</div>
        </Button>
        <Button
          variant="whiteViolet"
          onClick={handleRejectInvite}
          radius="sm"
          className="flex-1 max-h-[32px] tablet:max-w-[72px] pc:max-w-[84px]"
        >
          <div className="font-medium text-xs tablet:text-md">거절</div>
        </Button>
      </div>
    </div>
  );
}
