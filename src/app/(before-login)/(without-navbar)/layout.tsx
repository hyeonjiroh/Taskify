import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import AlertProvider from "@/components/common/alert/AlertProvider";
import Button from "@/components/common/button/Button";

type AuthLayoutProps = {
  children: ReactNode;
  buttonText: string;
  linkText: string;
  linkPath: string;
};

export const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  buttonText,
  linkText,
  linkPath,
}) => {
  return (
    <main className="w-full min-h-screen flex justify-center items-center bg-gray-200 p-3">
      <section className="w-[520px] flex flex-col justify-center items-center">
        <Link href="/">
          <Image
            src="/logo/logo_main.svg"
            alt="taskify 메인 로고"
            width={200}
            height={280}
            priority
          />
        </Link>
        <h2 className="text-xl font-medium text-gray-800 pb-8">
          오늘도 만나서 반가워요!
        </h2>
        <div className="w-full">
          {children}
          <div className="pb-6">
            <Button
              variant="purple"
              size="lg"
              className="w-full"
              form="auth-form"
              type="submit"
            >
              {buttonText}
            </Button>
          </div>
        </div>
        <p className="text-lg text-gray-800">
          {linkText}{" "}
          <Link href={linkPath} className="text-violet underline">
            {buttonText === "로그인" ? "회원가입하기" : "로그인하기"}
          </Link>
        </p>
      </section>
    </main>
  );
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full min-h-screen">
      {children}
      <AlertProvider />
    </div>
  );
}
