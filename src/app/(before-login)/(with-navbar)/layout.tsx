import LogoButton from "@/components/common/logo-button/LogoButton";
import ROUTE from "@/lib/constants/route";
import Link from "next/link";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col w-full h-screen bg-black ">
      <div className="flex justify-between items-center shrink-0 h-[60px] px-6 tablet:h-[70px] tablet:px-10 pc:px-20">
        <LogoButton variant="white" />
        <div className="flex gap-6 tablet:gap-9">
          <Link
            href={ROUTE.LOGIN}
            className="font-normal text-md text-white tablet:text-lg"
          >
            로그인
          </Link>
          <Link
            href={ROUTE.SIGNUP}
            className="font-normal text-md text-white tablet:text-lg"
          >
            회원가입
          </Link>
        </div>
      </div>
      <div className="overflow-y-auto scrollbar-hide">{children}</div>
    </div>
  );
}
