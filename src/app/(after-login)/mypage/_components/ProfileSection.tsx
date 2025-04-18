"use client";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { UserInfo } from "@/lib/types";
import {
  fetchUser,
  updateProfile,
  uploadProfileImage,
} from "@/lib/apis/accountApi";
import { useAlertStore } from "@/lib/store/useAlertStore";
import Button from "@/components/common/button/Button";
import ImageInput from "@/components/common/input/ImageInput";
import Input from "@/components/common/input/Input";

const profileSchema = z.object({
  nickname: z
    .string()
    .min(1, "닉네임을 입력해주세요.")
    .max(10, "닉네임은 10자 이하로 작성해주세요."),
});

type ProfileFormData = z.infer<typeof profileSchema>;

export default function ProfileSection() {
  const [data, setData] = useState<UserInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [profileImageUrl, setProfileImageUrl] = useState<string | null>(null);
  const [imageError, setImageError] = useState<string | null>(null);
  const [initialData, setInitialData] = useState<UserInfo | null>(null);
  const [isImageUploading, setIsImageUploading] = useState(false);
  const accessToken = Cookies.get("accessToken") ?? "";
  const { openAlert } = useAlertStore();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
    watch,
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    mode: "onBlur",
  });

  const currentNickname = watch("nickname");

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const res = await fetchUser({ token: accessToken });
        setData(res);
        setInitialData(res);
        setValue("nickname", res.nickname);
        setProfileImageUrl(res.profileImageUrl);
      } catch {
        openAlert("userNotFound");
      } finally {
        setLoading(false);
      }
    };
    if (accessToken) {
      getData();
    } else {
      setLoading(false);
    }
  }, [accessToken, setValue, openAlert]);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImageError(null);
    setIsImageUploading(true);
    try {
      const res = await uploadProfileImage({ token: accessToken, image: file });
      setProfileImageUrl(res.profileImageUrl);
    } catch (error) {
      if (error instanceof Error) {
        if (error.message.includes("Failed to fetch")) {
          setImageError("이미지 파일의 용량이 5MB를 넘습니다.");
        } else {
          setImageError(error.message);
        }
      } else {
        setImageError("이미지 업로드에 실패했습니다.");
      }
    } finally {
      setIsImageUploading(false);
    }
  };

  const onSubmit = async (formData: ProfileFormData) => {
    try {
      const updatedData = await updateProfile({
        token: accessToken,
        nickname: formData.nickname,
        profileImageUrl: profileImageUrl ?? undefined,
      });
      setData(updatedData);
      openAlert("profileUpdateSuccess");
    } catch {
      openAlert("profileUpdateFailed");
    }
  };

  const isFormChanged =
    (currentNickname && currentNickname !== initialData?.nickname) ||
    (profileImageUrl && profileImageUrl !== initialData?.profileImageUrl);

  if (loading) return <p>로딩 중...</p>;
  if (!data) return <p>정보를 불러오지 못했습니다.</p>;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full p-4 rounded-lg bg-white tablet:p-6"
    >
      <div className="flex flex-col gap-10 tablet:gap-6">
        <div className="font-bold text-2lg text-gray-800 tablet:text-2xl">
          프로필
        </div>
        <div className="flex flex-col gap-10 tablet:flex-row tablet:gap-[42px]">
          <div className="flex flex-col gap-2">
            <ImageInput
              variant="profile"
              initialImageUrl={profileImageUrl}
              onChange={handleImageUpload}
              isLoading={isImageUploading}
            />
            {imageError && <p className="text-red text-sm">{imageError}</p>}
          </div>
          <div className="flex flex-col gap-6 grow">
            <div className="flex flex-col gap-4">
              <Input label="이메일" value={data.email} disabled />
              <Input
                label="닉네임"
                {...register("nickname")}
                error={!!errors.nickname}
                errorMessage={errors.nickname?.message}
              />
            </div>
            <Button
              variant="purple"
              type="submit"
              disabled={!isValid || !isFormChanged}
            >
              저장
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
