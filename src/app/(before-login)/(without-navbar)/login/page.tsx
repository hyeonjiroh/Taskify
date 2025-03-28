"use client";
import Input from "@/components/common/input/Input";
import { AuthLayout } from "@/app/(before-login)/(without-navbar)/layout";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginFormData } from "@/lib/utils/validationSchema";

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
  });

  const onSubmit = (data: LoginFormData) => {
    console.log("로그인 데이터:", data);
  };
  return (
    <AuthLayout
      buttonText="로그인"
      linkText="회원이 아니신가요?"
      linkPath="/signup"
    >
      <form id="auth-form" onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="pb-4">
          <Input
            label="이메일"
            type="email"
            placeholder="이메일을 입력해 주세요"
            {...register("email")}
            error={!!errors.email}
            errorMessage={errors.email?.message}
          />
        </div>
        <div className="pb-6">
          <Input
            label="비밀번호"
            type="password"
            placeholder="비밀번호를 입력해 주세요"
            hasIcon="right"
            {...register("password")}
            error={!!errors.password}
            errorMessage={errors.password?.message}
          />
        </div>
        <button type="submit" className="hidden">
          제출
        </button>
      </form>
    </AuthLayout>
  );
}
