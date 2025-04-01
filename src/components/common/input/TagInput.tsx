"use client";

import { useState } from "react";
import TagList from "../tag/TagList";

interface TagInputProps {
  label: string;
  tags: string[];
  setTags: (tags: string[]) => void;
}

export default function TagInput({ label, tags, setTags }: TagInputProps) {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const trimmedValue = inputValue.trim();

    if (e.key === "Enter" && trimmedValue !== "") {
      e.preventDefault();

      // 중복된 태그 입력 방지
      if (!tags.includes(trimmedValue)) {
        setTags([...tags, trimmedValue]);
      }

      setInputValue("");
    }

    // 마지막 태그 제거
    if (
      (e.key === "Backspace" || e.key === "Delete") &&
      trimmedValue === "" &&
      tags.length > 0
    ) {
      e.preventDefault();
      setTags(tags.slice(0, -1));
    }
  };

  return (
    <div>
      <label className="block font-medium text-2lg text-gray-800 mb-2">
        {label}
      </label>
      <div className="flex flex-nowrap items-center gap-2 max-w-[520px] h-[42px] px-4 overflow-x-auto scrollbar-hide border border-gray-400 rounded-md bg-white focus-within:border-violet tablet:h-12">
        <TagList tags={tags} />
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="입력 후 Enter"
          className="flex-1 text-2lg text-gray-800 placeholder-gray-500 focus:outline-none"
        />
      </div>
    </div>
  );
}
