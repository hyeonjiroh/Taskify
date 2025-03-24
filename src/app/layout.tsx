import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Taskify",
  description: "일정을 함께 공유하고 관리해요",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="font-pretandard">
        <main>{children}</main>
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
