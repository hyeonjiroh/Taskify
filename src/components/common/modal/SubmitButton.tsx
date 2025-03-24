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
      className="flex-1 h-[54px] text-md tablet:text-lg"
      disabled={isDisabled}
    >
      {name}
    </Button>
  );
}
