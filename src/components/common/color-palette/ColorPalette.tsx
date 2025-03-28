import Image from "next/image";
import CheckIcon from "../../../../public/icon/check_icon.svg";

export const COLORS = [
  { name: "green", code: "#7AC555" },
  { name: "purple", code: "#760DDE" },
  { name: "orange", code: "#FFA500" },
  { name: "blue", code: "#76A6EA" },
  { name: "pink", code: "#E876EA" },
] as const;

type ColorPaletteProps = {
  onSelect: (color: ColorCode | "") => void;
  selectedColor?: ColorCode | "";
};

export type ColorCode =
  | "#7AC555"
  | "#760DDE"
  | "#FFA500"
  | "#76A6EA"
  | "#E876EA";

const ColorPalette = ({ onSelect, selectedColor }: ColorPaletteProps) => {
  return (
    <div className="flex gap-2">
      {COLORS.map(({ name, code }) => (
        <button
          key={name}
          className="flex justify-center items-center w-[30px] h-[30px] rounded-full transition-all hover:opacity-80 focus:outline-none"
          style={{ backgroundColor: code }}
          onClick={() => onSelect(code)}
        >
          {selectedColor === code && (
            <Image width={24} height={24} src={CheckIcon} alt="체크 표시" />
          )}
        </button>
      ))}
    </div>
  );
};

export default ColorPalette;
