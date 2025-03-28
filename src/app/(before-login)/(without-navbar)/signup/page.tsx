"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "@/components/common/input/Input";
import { AuthLayout } from "@/app/(before-login)/(without-navbar)/layout";
import { signupSchema, SignupFormData } from "@/lib/utils/validationSchema";

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    mode: "onBlur",
    defaultValues: {
      terms: false,
    },
  });

  const onSubmit = (data: SignupFormData) => {
    console.log("회원가입 데이터:", data);
  };

  return (
    <AuthLayout
      buttonText="가입하기"
      linkText="이미 회원이신가요?"
      linkPath="/login"
    >
      <form
        id="auth-form" // Button과 연결
        onSubmit={handleSubmit(onSubmit)}
        className="w-full"
      >
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
        <div className="pb-4">
          <Input
            label="닉네임"
            type="text"
            placeholder="닉네임을 입력해 주세요"
            {...register("nickname")}
            error={!!errors.nickname}
            errorMessage={errors.nickname?.message}
          />
        </div>
        <div className="pb-4">
          <Input
            label="비밀번호"
            type="password"
            placeholder="8자 이상 입력해 주세요"
            hasIcon="right"
            {...register("password")}
            error={!!errors.password}
            errorMessage={errors.password?.message}
          />
        </div>
        <div className="pb-4">
          <Input
            label="비밀번호 확인"
            type="password"
            placeholder="비밀번호를 한번 더 입력해 주세요"
            hasIcon="right"
            {...register("confirmPassword")}
            error={!!errors.confirmPassword}
            errorMessage={errors.confirmPassword?.message}
          />
        </div>
        <div className="pb-6">
          <label className="flex items-center text-lg text-gray-800">
            <input type="checkbox" {...register("terms")} className="mr-2" />
            이용약관에 동의합니다.
          </label>
          {errors.terms && (
            <p className="text-red text-sm mt-1">{errors.terms.message}</p>
          )}
        </div>
        <button type="submit" className="hidden">
          제출
        </button>
      </form>
    </AuthLayout>
  );
}
