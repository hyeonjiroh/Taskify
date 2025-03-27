export default function TagList({ tags }: { tags: string[] }) {
  return (
    <>
      {tags.map((tag, index) => (
        <div
          key={index}
          className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm"
        >
          {tag}
        </div>
      ))}
    </>
  );
}

const mock = ["feat", "chore", "docs"];
