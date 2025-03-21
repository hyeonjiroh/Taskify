import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div>before-login-layout</div>
      {children}
    </div>
  );
}
