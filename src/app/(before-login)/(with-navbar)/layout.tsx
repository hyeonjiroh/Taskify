import Navbar from "@/components/layout/navbar/Navbar";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col w-full h-screen bg-black ">
      <div className="shrink-0 h-[60px] tablet:h-[70px]">
        <Navbar variant="home" />
      </div>
      <div className="overflow-y-auto scrollbar-hide">{children}</div>
    </div>
  );
}
