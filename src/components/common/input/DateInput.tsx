"use client";

import { forwardRef, useState } from "react";
import { formatDate } from "@/lib/utils/dateUtils";
import { ko } from "date-fns/locale";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Image from "next/image";
import calendarIcon from "../../../../public/icon/calendar_icon.svg";

registerLocale("ko", ko);

interface DateInputProps {
  value: string;
  onClick?: () => void;
}

const DateInputTrigger = forwardRef<HTMLDivElement, DateInputProps>(
  ({ value, onClick }, ref) => (
    <div
      ref={ref}
      onClick={onClick}
      className="flex items-center gap-[8px] w-full h-[48px] rounded-[6px] border border-gray-400 px-[16px] py-[9px]"
    >
      <Image src={calendarIcon} width={22} height={22} alt="calendarIcon" />
      <span
        className={`font-normal text-md leading-[1] tablet:text-lg pc:text-lg ${value ? "text-gray-800" : "text-gray-500"}`}
      >
        {value || "날짜를 입력해 주세요"}
      </span>
    </div>
  )
);
DateInputTrigger.displayName = "DateInputTrigger";

const DateInput = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const formattedDate = selectedDate
    ? formatDate(selectedDate.toISOString(), true)
    : "";
  return (
    <div className="flex flex-col">
      <label className="font-medium text-gray-800 text-lg mb-[8px] tablet:text-2lg pc:text-2lg">
        마감일
      </label>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="Pp"
        locale="ko"
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={5}
        customInput={<DateInputTrigger value={formattedDate} />}
      />
    </div>
  );
};

export default DateInput;
