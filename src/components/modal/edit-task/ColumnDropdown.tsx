import { useState, useEffect } from "react";
import { fetchColumnList } from "@/lib/apis/columnsApi";
import Image from "next/image";
import dropdownIcon from "../../../../public/icon/dropdown_icon.svg";
import checkItem from "../../../../public/icon/check_icon.svg";

interface ColumnDropdownProps {
  token: string;
  dashboardId: string;
  columnId: number;
  onChange: (value: number) => void;
}

export default function ColumnDropdown({
  token,
  dashboardId,
  columnId,
  onChange,
}: ColumnDropdownProps) {
  const [columns, setColumns] = useState<{ id: number; title: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setLoading(true);

    try {
      const getData = async () => {
        const res = await fetchColumnList({
          token,
          id: dashboardId,
        });
        setColumns(res.data);
      };

      getData();
    } catch (error) {
      console.error("Failed to load column list :", error);
    } finally {
      setLoading(false);
    }
  }, []);

  const selected = columns.find((col) => col.id === columnId);
  if (loading) return <p>Loading...</p>;

  return (
    <div className="relative flex flex-col w-full tablet:min-w-[217px]">
      <label className="block mb-2.5 text-lg font-medium text-gray-800 tablet:mb-2 tablet:text-2lg">
        상태
      </label>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="h-12 px-4 py-3 font-normal text-md text-gray-500 border border-gray-400 rounded-md tablet:py-[11px] tablet:text-lg"
      >
        <div className="flex items-center justify-between h-full w-full">
          {selected ? (
            <div className="flex shrink-0 items-center gap-[6px] px-2 py-1 rounded-2xl bg-violet-8">
              <div className="w-[6px] h-[6px] rounded-full bg-violet"></div>
              <div className="font-normal text-xs leading-[18px] text-violet">
                {selected.title}
              </div>
            </div>
          ) : (
            <span className="text-gray-500">상태 선택</span>
          )}
          <Image src={dropdownIcon} width={8} height={8} alt="arrow" />
        </div>
      </button>

      {isOpen && (
        <ul className="absolute top-[80px] z-10 w-full mt-2 bg-white border border-gray-300 rounded-md shadow-md max-h-[200px] overflow-y-auto">
          {columns.map((col) => (
            <li
              key={col.id}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                onChange(col.id);
                setIsOpen(false);
              }}
            >
              <div className="flex gap-3 items-center">
                <div className="invert brightness-75 relative w-4 h-3">
                  {col.id === columnId && <Image src={checkItem} fill alt="" />}
                </div>
                <div className="flex shrink-0 items-center gap-[6px] px-2 py-1 rounded-2xl bg-violet-8 w-fit">
                  <div className="w-[6px] h-[6px] rounded-full bg-violet"></div>
                  <div className="font-normal text-xs leading-[18px] text-violet">
                    {col.title}
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
