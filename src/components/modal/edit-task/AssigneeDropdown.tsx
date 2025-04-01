import { useState, useEffect } from "react";
import { fetchDashboardMember } from "@/lib/apis/membersApi";
import Image from "next/image";
import dropdownIcon from "../../../../public/icon/dropdown_icon.svg";
import checkItem from "../../../../public/icon/check_icon.svg";
import UserIcon from "@/components/common/user-icon/UserIcon";

interface AssigneeDropdownProps {
  token: string;
  dashboardId: string;
  memberId: number;
  onChange: (value: number) => void;
}

export default function AssigneeDropdown({
  token,
  dashboardId,
  memberId,
  onChange,
}: AssigneeDropdownProps) {
  const [members, setMembers] = useState<
    { userId: number; nickname: string; profileImageUrl: string | null }[]
  >([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const res = await fetchDashboardMember({
        token,
        page: 1,
        size: 20,
        id: dashboardId,
      });
      setMembers(res.members);
    };

    getData();
  }, []);

  const selected = members.find((member) => member.userId === memberId);

  return (
    <div className="relative flex flex-col w-full tablet:min-w-[217px]">
      <label className="block mb-2.5 text-lg font-medium text-gray-800 tablet:mb-2 tablet:text-2lg">
        담당자
      </label>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="h-12 px-4 py-3 font-normal text-md text-gray-500 border border-gray-400 rounded-md tablet:py-[11px] tablet:text-lg"
      >
        <div className="flex items-center justify-between h-full w-full">
          {selected ? (
            <div className="flex items-center gap-[6px]">
              <UserIcon
                name={selected.nickname}
                img={selected.profileImageUrl}
                size="sm"
              />
              <div className="font-normal text-lg text-gray-800">
                {selected.nickname}
              </div>
            </div>
          ) : (
            <span className="text-gray-500">담당자 선택</span>
          )}
          <Image src={dropdownIcon} width={8} height={8} alt="arrow" />
        </div>
      </button>

      {isOpen && (
        <ul className="absolute top-[80px] z-10 w-full mt-2 bg-white border border-gray-300 rounded-md shadow-md max-h-[200px] overflow-y-auto">
          {members.map((member) => (
            <li
              key={member.userId}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                onChange(member.userId);
                setIsOpen(false);
              }}
            >
              <div className="flex gap-3 items-center">
                <div className="invert brightness-75 relative w-4 h-3">
                  {member.userId === memberId && (
                    <Image src={checkItem} fill alt="" />
                  )}
                </div>
                <div className="flex items-center gap-[6px]">
                  <UserIcon
                    name={member.nickname}
                    img={member.profileImageUrl}
                    size="sm"
                  />
                  <div className="font-normal text-lg text-gray-800">
                    {member.nickname}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
