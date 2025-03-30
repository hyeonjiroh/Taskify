"use client";

import Input from "@/components/common/input/Input";
import Button from "@/components/common/button/Button";

export default function DashboardEditSection() {
  return (
    <div className="w-full p-4 rounded-lg bg-white tablet:p-6">
      <div className="flex flex-col gap-10 tablet:gap-6">
        <div className="font-bold text-2lg text-gray-800 tablet:text-2xl">
          대시보드 이름
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <Input label="대시보드 이름" />
          </div>
          <Button variant="purple">변경</Button>
        </div>
      </div>
    </div>
  );
}
