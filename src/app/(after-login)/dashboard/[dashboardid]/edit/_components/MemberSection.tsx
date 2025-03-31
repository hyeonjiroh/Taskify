"use client";

export default function MemberSection({
  id,
  token,
}: {
  id: number;
  token: string;
}) {
  // id 값과 token 값 사용하고 나서는 지워도 되는 코드들
  console.log(id);
  console.log(token);

  return (
    <div className="w-full p-4 rounded-lg bg-white tablet:p-6">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-xl text-gray-800 tablet:text-2xl">
          구성원
        </h2>
        <div className="flex items-center gap-2">
          <span>1 페이지 중 1</span>
        </div>
      </div>
    </div>
  );
}
