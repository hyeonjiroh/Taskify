import { useState } from "react";
import { Invitation } from "@/lib/types";
import { deleteInvitation } from "@/lib/apis/dashboardsApi";
import Button from "@/components/common/button/Button";

type InvitationCardProps = Invitation & {
  token: string;
};

export default function InvitationCard({
  id,
  dashboard,
  invitee,
  token,
}: InvitationCardProps) {
  const [loading, setLoading] = useState(false);

  const handleDeleteClick = async () => {
    setLoading(true);

    try {
      await deleteInvitation({
        token,
        dashboardId: dashboard.id,
        invitationId: id,
      });

      window.location.reload();
    } catch (error) {
      console.error("Failed to delete invitation :", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-3 border-b border-gray-400 tablet:py-4">
      <div className="flex justify-between items-center">
        <div>{invitee.email}</div>
        <Button
          variant="whiteViolet"
          onClick={handleDeleteClick}
          className="w-[52px] max-h-[32px] tablet:w-[84px]"
        >
          {!loading && "취소"}
        </Button>
      </div>
    </div>
  );
}
