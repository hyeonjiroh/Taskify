import Image from "next/image";
import AddButtonIcon from "../../../../public/icon/add_box.svg";

export default function AddButton() {
  return (
    <button type="button" className="rounded hover:bg-violet-8">
      <Image src={AddButtonIcon} width={20} height={20} alt="" />
    </button>
  );
}
