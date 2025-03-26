"use client";

import { useIsPC } from "@/lib/hooks/useCheckViewport";
import Image from "next/image";
import CrownIcon from "../../../../public/icon/crown_icon.svg";

export default function DashboardTitle({
  title,
  isOwner,
}: {
  title: string;
  isOwner: boolean;
}) {
  const isPC = useIsPC();

  return (
    <>
      {isPC && (
        <>
          <div>{title}</div>
          <div>
            {isOwner && <Image src={CrownIcon} width={20} height={16} alt="" />}
          </div>
        </>
      )}
    </>
  );
}
