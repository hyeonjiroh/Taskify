import { useColumnStore } from "@/lib/store/useColumnStore";

export default function ColumnNameTag() {
  const { selectedColumnTitle } = useColumnStore();

  return (
    <div className="flex shrink-0 items-center gap-[6px] px-2 py-1 rounded-2xl bg-violet-8 tablet:px-[10px]">
      <div className="w-[6px] h-[6px] rounded-full bg-violet"></div>
      <div className="font-normal text-xs leading-[18px] text-violet">
        {selectedColumnTitle}
      </div>
    </div>
  );
}
