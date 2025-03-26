import { TaskCardList } from "@/lib/types";

export default function TaskCard({ id, title }: TaskCardList) {
  return <div className="text-red">{title}</div>;
}
