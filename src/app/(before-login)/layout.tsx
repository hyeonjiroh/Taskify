import { ReactNode } from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import ROUTE from "@/lib/constants/route";

export default function Layout({ children }: { children: ReactNode }) {
  const accessToken = cookies().get("accessToken")?.value;

  if (accessToken) {
    redirect(ROUTE.MYDASHBOARD);
  }

  return <div>{children}</div>;
}
