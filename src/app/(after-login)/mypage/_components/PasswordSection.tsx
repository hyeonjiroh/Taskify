"use client";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { updatePassword } from "@/lib/apis/accountApi";
import { useAlertStore } from "@/lib/store/useAlertStore";
import Button from "@/components/common/button/Button";
import Input from "@/components/common/input/Input";

const passwordSchema = z
  .object({
    password: z.string().min(1, "현재 비밀번호를 입력해주세요."),
    newPassword: z.string().min(8, "새 비밀번호는 8자 이상이어야 합니다."),
    confirmNewPassword: z.string().min(1, "새 비밀번호를 다시 입력해주세요."),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "새 비밀번호가 일치하지 않습니다.",
    path: ["confirmNewPassword"],
  });

type PasswordFormData = z.infer<typeof passwordSchema>;

export default function PasswordSection() {
  const accessToken = Cookies.get("accessToken") ?? "";
  const { openAlert } = useAlertStore();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    reset,
  } = useForm<PasswordFormData>({
    resolver: zodResolver(passwordSchema),
    mode: "onBlur",
    defaultValues: {
      password: "",
      newPassword: "",
      confirmNewPassword: "",
    },
  });

  const currentPassword = watch("password");
  const currentNewPassword = watch("newPassword");

  const onSubmit = async (formData: PasswordFormData) => {
    try {
      await updatePassword({
        token: accessToken,
        password: formData.password,
        newPassword: formData.newPassword,
      });
      openAlert("profileUpdateSuccess");
      reset();
    } catch (error) {
      if (error instanceof Error) {
        const errorInfo = JSON.parse(error.message);
        if (errorInfo.status === 401) {
          openAlert("wrongPassword");
        } else {
          openAlert("profileUpdateFailed");
        }
      } else {
        openAlert("profileUpdateFailed");
      }
    }
  };

  const isFormChanged = currentPassword !== "" || currentNewPassword !== "";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full p-4 rounded-lg bg-white tablet:p-6"
    >
      <div className="flex flex-col gap-10 tablet:gap-6">
        <div className="font-bold text-2lg text-gray-800 tablet:text-2xl">
          비밀번호 변경
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <Input
              type="password"
              label="현재 비밀번호"
              placeholder="비밀번호 입력"
              hasIcon="right"
              {...register("password")}
              error={!!errors.password}
              errorMessage={errors.password?.message}
            />
            <Input
              type="password"
              label="새 비밀번호"
              placeholder="새 비밀번호 입력"
              hasIcon="right"
              {...register("newPassword")}
              error={!!errors.newPassword}
              errorMessage={errors.newPassword?.message}
            />
            <Input
              type="password"
              label="새 비밀번호 확인"
              placeholder="새 비밀번호 입력"
              hasIcon="right"
              {...register("confirmNewPassword")}
              error={!!errors.confirmNewPassword}
              errorMessage={errors.confirmNewPassword?.message}
            />
          </div>
          <Button
            variant="purple"
            type="submit"
            disabled={!isValid || !isFormChanged}
          >
            변경
          </Button>
        </div>
      </div>
    </form>
  );
}
