import Image from "next/image";
import Link from "next/link";
import Input from "@/components/common/input/Input";
import Button from "@/components/common/button/Button";

export default function Page() {
  return (
    <main className="w-full h-screen flex justify-center items-center bg-gray-200 p-3">
      <section className="w-[520px] flex flex-col justify-center items-center">
        <Link href="/">
          <Image
            src="/logo/logo_main.svg"
            alt="taskify 메인 로고"
            width={200}
            height={280}
          />
        </Link>
        <h2 className="text-xl font-medium text-gray-800 pb-8">
          오늘도 만나서 반가워요!
        </h2>
        <form className="w-full">
          <div className="pb-4">
            <Input
              label="이메일"
              type="email"
              placeholder="이메일을 입력해 주세요"
            />
          </div>
          <div className="pb-6">
            <Input
              label="비밀번호"
              type="password"
              placeholder="비밀번호를 입력해 주세요"
              hasIcon="right"
            />
          </div>
          <div className="pb-6">
            <Button variant="purple" size="lg" className="w-full">
              로그인
            </Button>
          </div>
        </form>
        <p className="text-lg text-gray-800">
          회원이 아니신가요?{" "}
          <Link href="/signup" className="text-violet underline">
            회원가입하기
          </Link>
        </p>
      </section>
    </main>
  );
}
