"use client";

import Button from "@/components/common/button/Button";
import Input from "@/components/common/input/Input";

export default function PasswordSection() {
  return (
    <div className="w-full p-4 rounded-lg bg-white tablet:p-6">
      <div className="flex flex-col gap-10 tablet:gap-6">
        <div className="font-bold text-2lg text-gray-800 tablet:text-2xl">
          비밀번호 변경
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            {/* 로그인/회원가입 페이지에서 한 것 처럼 패스워드 토글 버튼 넣어도 좋을 것 같네요 */}
            <Input type="password" label="현재 비밀번호" />
            <Input type="password" label="새 비밀번호" />
            <Input type="password" label="새 비밀번호 확인" />
          </div>
          <Button variant="purple">변경</Button>
        </div>
      </div>
    </div>
  );
}
