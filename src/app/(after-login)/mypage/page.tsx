import BackButton from "./_components/BackButton";
import PasswordSection from "./_components/PasswordSection";
import ProfileSection from "./_components/ProfileSection";

export default function Page() {
  return (
    <div className="flex flex-col px-3 py-4 tablet:px-5">
      <div className="flex flex-col gap-[6px] tablet:gap-[29px]">
        <BackButton />
        <div className="flex flex-col gap-4 max-w-[672px] tablet:gap-6">
          <ProfileSection />
          <PasswordSection />
        </div>
      </div>
    </div>
  );
}
