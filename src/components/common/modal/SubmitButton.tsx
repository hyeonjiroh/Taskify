import Button from "@/components/common/button/Button";

export default function SubmitButton({ name }: { name: string }) {
  return (
    <Button
      variant="purple"
      className="w-[114px] h-[54px] text-md tablet:w-[256px] tablet:text-lg"
      disabled={true}
    >
      {name}
    </Button>
  );
}
