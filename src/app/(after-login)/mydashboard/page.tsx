import { cookies } from "next/headers";
import DashboardListSection from "./_components/DashboardListSection";
import InvitationSection from "./_components/InvitationSection";

export default function Page() {
  const accessToken = cookies().get("accessToken")?.value ?? "";

  return (
    <div className="flex flex-col gap-6 p-6 tablet:gap-12 tablet:p-10 pc:gap-10">
      <DashboardListSection token={accessToken} />
      <InvitationSection token={accessToken} />
    </div>
  );
}
