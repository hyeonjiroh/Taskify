"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import BackIcon from "../../../../../../../public/icon/arrow_right_icon.svg";

export default function BackButton() {
  const router = useRouter();

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          router.back();
        }}
        className="flex gap-2 items-center"
      >
        <Image
          src={BackIcon}
          className="scale-x-[-1] size-[18px] tablet:size-[18px]"
          alt=""
        />
        <p className="font-medium text-md text-gray-800 tablet:text-lg">
          돌아가기
        </p>
      </button>
    </div>
  );
}
