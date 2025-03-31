"use client";
import { ChangeEvent, useState, useEffect } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { postImage } from "@/lib/apis/imageApi";

interface BaseImageInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  variant: "task" | "profile";
  initialImageUrl?: string | null;
}

interface TaskImageInputProps extends BaseImageInputProps {
  variant: "task";
  columnId: number;
}

interface ProfileImageInputProps extends BaseImageInputProps {
  variant: "profile";
}

type ImageInputProps = TaskImageInputProps | ProfileImageInputProps;

const ImageInput = ({
  label,
  variant,
  initialImageUrl,
  ...props
}: ImageInputProps) => {
  const [uploadImgUrl, setUploadImgUrl] = useState<string>(
    initialImageUrl || ""
  );
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setUploadImgUrl(initialImageUrl || "");
  }, [initialImageUrl]);

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      setError("파일 크기가 5MB를 초과했습니다.");
      return;
    }

    const localUrl = URL.createObjectURL(file);
    setUploadImgUrl(localUrl);
    setError(null);

    if (props.onChange) {
      props.onChange(e);
      return;
    }

    try {
      const columnId =
        variant === "task"
          ? (props as TaskImageInputProps).columnId
          : undefined;
      const imageUrl = await postImage(variant, columnId, file);
      setUploadImgUrl(imageUrl);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message || "이미지 업로드에 실패했습니다.");
      } else {
        setError("알 수 없는 오류가 발생했습니다.");
      }
    }
  };

  const containerStyles = twMerge(clsx("flex flex-col gap-1 w-full max-w-md"));

  const imageWrapperStyles = twMerge(
    clsx(
      "relative flex items-center justify-center",
      "bg-gray-100 rounded-md",
      "cursor-pointer hover:bg-gray-200 transition-colors",
      variant === "task"
        ? "w-[58px] h-[58px] tablet:w-[76px] tablet:h-[76px] pc:w-[76px] pc:h-[76px]"
        : "w-[100px] h-[100px] tablet:w-[182px] tablet:h-[182px] pc:w-[182px] pc:h-[182px]"
    )
  );

  const sizesValue =
    variant === "task"
      ? "(max-width: 767px) 58px, 76px"
      : "(max-width: 767px) 100px, 182px";

  return (
    <div className={containerStyles}>
      {label && (
        <span className="text-base tablet:text-lg pc:text-lg font-medium text-gray-800">
          {label}
        </span>
      )}
      <label htmlFor={label || "file"} className={imageWrapperStyles}>
        {uploadImgUrl ? (
          <Image
            src={uploadImgUrl}
            alt="업로드 이미지 미리보기"
            fill
            sizes={sizesValue}
            className="object-cover rounded-md"
            priority
          />
        ) : (
          <div className="relative w-6 h-6">
            <Image
              src="/icon/add_file_icon.svg"
              alt="이미지 추가"
              fill
              sizes="24px"
              className="object-contain"
              priority
            />
          </div>
        )}
      </label>
      <input
        type="file"
        id={label || "file"}
        name={label || "file"}
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
        {...props}
      />
      {error && <p className="text-red text-md mt-1">{error}</p>}
    </div>
  );
};

export default ImageInput;
