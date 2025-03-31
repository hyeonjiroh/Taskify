export default function InvitationSection({ token }: { token: string }) {
  return (
    <div className="flex flex-col gap-[26px] w-full p-4 rounded-lg bg-white tablet:gap-[17px] tablet:p-6">
      <div className="flex justify-between items-center tablet:items-start">
        <div className="flex flex-col gap-[14px] tablet:gap-8">
          <h2 className="font-bold text-xl text-gray-800 tablet:text-2xl">
            초대받은 대시보드
          </h2>
          <p className="font-normal text-md text-gray-500">{token}</p>
        </div>
        <div className="flex flex-col items-end gap-3 tablet:flex-row tablet:items-center tablet:gap-4">
          <div className="flex items-center gap-3 tablet:gap-4"></div>
        </div>
      </div>
    </div>
  );
}
