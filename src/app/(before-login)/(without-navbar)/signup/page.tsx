"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "@/components/common/input/Input";
import { AuthLayout } from "@/app/(before-login)/(without-navbar)/layout";
import { signupSchema, SignupFormData } from "@/lib/utils/validationSchema";
import { useAlertStore } from "@/lib/store/useAlertStore";
import { fetchSignup } from "@/lib/apis/authApi";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ROUTE from "@/lib/constants/route";

export default function Page() {
  const { openAlert } = useAlertStore();
  const [isLoading, setIsLoading] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(true);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    mode: "onBlur",
    defaultValues: {
      terms: false,
    },
  });
  const onSubmit = async (data: SignupFormData) => {
    setIsLoading(true);
    try {
      await fetchSignup(data);
      setIsLoading(false);
      openAlert("signupSuccess");
      router.push("/login");
    } catch (error: unknown) {
      setIsLoading(false);
      if (error instanceof Error) {
        const errorInfo: { status: number; message: string } = JSON.parse(
          error.message
        );
        if (errorInfo.status === 409) {
          openAlert("emailDuplicated");
        }
      }
    }
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      router.replace(ROUTE.MYDASHBOARD);
    } else {
      setIsRedirecting(false);
    }
  }, []);

  if (isRedirecting) return;

  return (
    <AuthLayout
      buttonText="가입하기"
      linkText="이미 회원이신가요?"
      linkPath="/login"
      isLoading={isLoading}
      isFormValid={isValid}
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
