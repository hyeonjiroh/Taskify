import Button from "@/components/common/button/Button";

export default function SubmitButton({
  name,
  onClick,
  isDisabled,
}: {
  name: string;
  onClick: () => void;
  isDisabled: boolean;
}) {
  return (
    <Button
      variant="purple"
      onClick={onClick}
      className="w-[114px] h-[54px] text-md tablet:w-[256px] tablet:text-lg"
      disabled={isDisabled}
    >
      {name}
    </Button>
  );
}
