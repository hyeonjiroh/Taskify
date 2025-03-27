import dayjs from "dayjs";

export function formatDate(dateStr: string, withTime: boolean): string {
  const date = dayjs(dateStr);
  return withTime ? date.format("YYYY.MM.DD HH:mm") : date.format("YYYY.MM.DD");
}
