import { useIsPC, useIsMobile } from "@/lib/hooks/useCheckViewport";
import { DashboardMember } from "@/lib/types";
import UserIcon from "@/components/common/user-icon/UserIcon";

export default function MemberIcon({
  nickname,
  //   profileImageUrl,
}: DashboardMember) {
  const isMobile = useIsMobile();

  return <UserIcon name={nickname} size={isMobile ? "md" : "lg"} />;
}
