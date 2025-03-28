import Input from "@/components/common/input/Input";
import { AuthLayout } from "@/app/(before-login)/(without-navbar)/layout";

export default function Page() {
  return (
    <AuthLayout
      buttonText="로그인"
      linkText="회원이 아니신가요?"
      linkPath="/signup"
    >
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
    </AuthLayout>
  );
}
