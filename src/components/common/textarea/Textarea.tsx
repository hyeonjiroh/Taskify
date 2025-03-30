import { ComponentPropsWithoutRef } from "react";

interface TextareaProps extends ComponentPropsWithoutRef<"textarea"> {
  label: string;
  containerClassName: string;
  labelClassName: string;
  textareaClassName: string;
  spanClassName?: string;
}

const Textarea = ({
  label,
  required,
  containerClassName,
  labelClassName,
  textareaClassName,
  spanClassName,
  ...props
}: TextareaProps) => {
  return (
    <div className={`flex flex-col ${containerClassName}`}>
      <label className={`text-gray-800 ${labelClassName}`}>
        {label}
        {required && <span className={`text-violet ${spanClassName}`}>*</span>}
      </label>
      <textarea
        className={`border border-gray-400 resize-none ${textareaClassName}`}
        required={required}
        {...props}
      />
    </div>
  );
};

export default Textarea;
