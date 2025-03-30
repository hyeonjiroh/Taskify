"use client";

import { useEffect, useState } from "react";
import { UserInfo } from "@/lib/types";
import { fetchUser } from "@/lib/apis/usersApi";
import Button from "@/components/common/button/Button";
import ImageInput from "@/components/common/input/ImageInput";
import Input from "@/components/common/input/Input";

export default function ProfileSection() {
  const [data, setData] = useState<UserInfo | null>(null);
  const accessToken = localStorage.getItem("accessToken") ?? "";

  useEffect(() => {
    const getData = async () => {
      const res = await fetchUser({
        token: accessToken,
      });
      setData(res);
    };

    getData();
  }, []);

  if (!data) return;

  const { email, nickname, profileImageUrl } = data;

  // 이 밑으로 formData(닉네임, 이미지) state 생성하시고, 기본값으로 각각 위의 nickname, profileImageUrl 넣어주시면 될 거예요
  // 아래는 vercel 배포를 위해 위 값들을 임시로 사용한 테스트 코드라 나중에 삭제해주시면 됩니다
  console.log(nickname);
  console.log(profileImageUrl);

  return (
    <div className="w-full p-4 rounded-lg bg-white tablet:p-6">
      <div className="flex flex-col gap-10 tablet:gap-6">
        <div className="font-bold text-2lg text-gray-800 tablet:text-2xl">
          프로필
        </div>
        <div className="flex flex-col gap-10 tablet:flex-row tablet:gap-[42px]">
          <div>
            <ImageInput variant="profile" />
          </div>
          <div className="flex flex-col gap-6 grow">
            <div className="flex flex-col gap-4">
              {/* 이메일 인풋에는 나중에 disabled 속성 들어가야 합니다 */}
              <Input label="이메일" value={email} />
              <Input label="닉네임" />
            </div>
            <Button variant="purple">저장</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
