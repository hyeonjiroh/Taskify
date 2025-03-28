import Input from "@/components/common/input/Input";
import { AuthLayout } from "@/app/(before-login)/(without-navbar)/layout";

export default function Page() {
  return (
    <AuthLayout
      buttonText="가입하기"
      linkText="이미 회원이신가요?"
      linkPath="/login"
    >
      <div className="pb-4">
        <Input
          label="이메일"
          type="email"
          placeholder="이메일을 입력해 주세요"
        />
      </div>
      <div className="pb-4">
        <Input
          label="닉네임"
          type="text"
          placeholder="닉네임을 입력해 주세요"
        />
      </div>
      <div className="pb-4">
        <Input
          label="비밀번호"
          type="password"
          placeholder="8자 이상 입력해 주세요"
          hasIcon="right"
        />
      </div>
      <div className="pb-4">
        <Input
          label="비밀번호 확인"
          type="password"
          placeholder="비밀번호를 한번 더 입력해 주세요"
          hasIcon="right"
        />
      </div>
      <div className="pb-6">
        <p className="text-lg text-gray-800">이용약관에 동의합니다.</p>
      </div>
    </AuthLayout>
  );
}
