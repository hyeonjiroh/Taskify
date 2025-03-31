import Button from "@/components/common/button/Button";
import { Invitation } from "@/lib/types";

export default function InvitationCard({ id, invitee }: Invitation) {
  return (
    <div className="py-3 border-b border-gray-400 tablet:py-4">
      <div className="flex justify-between items-center">
        <div>{invitee.email}</div>
        <Button
          variant="whiteViolet"
          className="w-[52px] max-h-[32px] tablet:w-[84px]"
        >
          취소
        </Button>
      </div>
    </div>
  );
}
