import { useState } from "react";
import Image from "next/image";
import check from "@/app/check_color.svg";

const COLORS = [
  { name: "green", code: "#7AC555" },
  { name: "purple", code: "#760DDE" },
  { name: "orange", code: "#FFA500" },
  { name: "blue", code: "#76A6EA" },
  { name: "pink", code: "#E876EA" },
] as const;

type ColorPaletteProps = {
  onSelect: (color: string) => void;
};

const ColorPalette = ({ onSelect }: ColorPaletteProps) => {
  const [selectedColor, setSelectedColor] = useState<string>("");

  const handleClick = (color: string) => {
    const newColor = selectedColor === color ? "" : color;
    setSelectedColor(newColor);
    onSelect(newColor);
  };

  return (
    <div className="flex gap-2">
      {COLORS.map(({ name, code }) => (
        <button
          key={name}
          className="relative w-10 h-10 rounded-full flex items-center justify-center transition-all hover:opacity-80 focus:outline-none"
          style={{ backgroundColor: code }}
          onClick={() => handleClick(code)}
        >
          {selectedColor === code && (
            <Image
              className="absolute left-0 top-0 h-full w-full"
              width={24}
              height={24}
              src={check.src}
              alt="체크 표시"
            />
          )}
        </button>
      ))}
    </div>
  );
};

export default ColorPalette;
