"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "@/components/common/input/Input";
import { AuthLayout } from "@/app/(before-login)/(without-navbar)/layout";
import { loginSchema, LoginFormData } from "@/lib/utils/validationSchema";
import { useAlertStore } from "@/lib/store/useAlertStore";
import { fetchLogin } from "@/lib/apis/authApi";
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
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    try {
      const response = await fetchLogin(data);
      setIsLoading(false);
      localStorage.setItem("accessToken", response.accessToken);
      document.cookie = `accessToken=${response.accessToken}; path=/`;
      openAlert("loginSuccess");
      router.push("/mydashboard");
    } catch (error: unknown) {
      setIsLoading(false);
      if (error instanceof Error) {
        const errorInfo: { status: number; message: string } = JSON.parse(
          error.message
        );
        if (errorInfo.status === 400) {
          openAlert("wrongPassword");
        }
        if (errorInfo.status === 404) {
          openAlert("userNotFound");
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
      buttonText="로그인"
      linkText="회원이 아니신가요?"
      linkPath="/signup"
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
