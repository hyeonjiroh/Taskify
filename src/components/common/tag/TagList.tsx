const TAG_BACKGROUND_COLORS = ["#F9EEE3", "#E7F7DB", "#F7DBF0", "#DBE6F7"];
const TAG_TEXT_COLORS = ["#D58D49", "#86D549", "#D549B6", "#4981D5"];

export default function TagList({ tags }: { tags: string[] }) {
  return (
    <div className="flex gap-2 tablet:gap-[6px]">
      {tags.map((tag, index) => (
        <div
          key={index}
          className="shrink-0 px-[6px] py-1 rounded font-normal text-xs leading-[18px] tablet:px-2 tablet:py-[5px]"
          style={{
            backgroundColor:
              TAG_BACKGROUND_COLORS[index % TAG_BACKGROUND_COLORS.length],
            color: TAG_TEXT_COLORS[index % TAG_TEXT_COLORS.length],
          }}
        >
          {tag}
        </div>
      ))}
    </div>
  );
}
