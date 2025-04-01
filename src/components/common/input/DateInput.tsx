"use client";

import { forwardRef } from "react";
import { ko } from "date-fns/locale";
import DatePicker, { registerLocale } from "react-datepicker";
import Image from "next/image";
import "react-datepicker/dist/react-datepicker.css";
import calendarIcon from "../../../../public/icon/calendar_icon.svg";

registerLocale("ko", ko);

interface DateInputTriggerProps {
  value: string;
  onClick?: () => void;
}

interface DateInputProps {
  value: string;
  onChange: (date: string) => void;
}

const DateInputTrigger = forwardRef<HTMLDivElement, DateInputTriggerProps>(
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

const DateInput = ({ value, onChange }: DateInputProps) => {
  const handleDateChange = (date: Date | null) => {
    if (date) {
      const localDate = new Date(date.getTime() + 9 * 60 * 60 * 1000);
      const formattedDate = localDate
        .toISOString()
        .slice(0, 16)
        .replace("T", " ");
      onChange(formattedDate);
    } else {
      onChange("");
    }
  };
  return (
    <div className="flex flex-col">
      <label className="font-medium text-gray-800 text-lg mb-[8px] tablet:text-2lg pc:text-2lg">
        마감일
      </label>
      <DatePicker
        selected={value ? new Date(value) : null}
        onChange={handleDateChange}
        dateFormat="Pp"
        locale="ko"
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={5}
        customInput={<DateInputTrigger value={value} />}
      />
    </div>
  );
};

export default DateInput;
