import { cookies } from "next/headers";
import BackButton from "./_components/BackButton";
import DashboardEditSection from "./_components/DashboardEditSection";
import InvitationSection from "./_components/InvitationSection";
import MemberSection from "./_components/MemberSection";

export default function Page({ params }: { params: { dashboardid: string } }) {
  const dashboardId = Number(params.dashboardid);
  const accessToken = cookies().get("accessToken")?.value ?? "";

  return (
    <div>
      <div className="flex flex-col px-3 py-4 tablet:px-5">
        <div className="flex flex-col gap-[6px] tablet:gap-[29px]">
          <BackButton />
          <div className="flex flex-col gap-4 max-w-[620px]">
            <DashboardEditSection />
            <MemberSection id={dashboardId} token={accessToken} />
            <InvitationSection id={dashboardId} token={accessToken} />
          </div>
        </div>
      </div>
    </div>
  );
}
