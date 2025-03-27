import ColumnNameTag from "./ColumnNameTag";
import TagList from "@/components/common/tag/TagList";
import Image from "next/image";

export default function TaskContentSection({
  title,
  description,
  tags,
  imageUrl,
}: {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string | null;
}) {
  return (
    <>
      <div className="flex items-start flex-1 min-w-0 max-h-[26px] tablet:max-h-[28px]">
        <div className="flex items-center pr-3 tablet:pr-5">
          <ColumnNameTag />
          <div className="shrink-0 w-[1px] h-4 bg-gray-400 ml-3 tablet:ml-5" />
        </div>
        <div className="flex-nowrap w-full min-w-0 overflow-x-auto scrollbar-hide max-w-[205px] tablet:max-w-[315px] pc:max-w-[340px]">
          <TagList tags={tags} />
        </div>
      </div>
      <div className="w-[290px] tablet:w-[420px] pc:w-[445px]">
        <div className="font-normal text-md">{description}</div>
      </div>
      {imageUrl && (
        <div className="relative shrink-0 w-[290px] h-[168px] tablet:w-[420px] tablet:h-[246px] pc:w-[445px] pc:h-[260px]">
          <Image
            src={imageUrl}
            fill
            className="rounded-md"
            style={{
              objectFit: "cover",
            }}
            alt={title}
          />
        </div>
      )}
    </>
  );
}
