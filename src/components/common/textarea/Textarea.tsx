import { ComponentPropsWithoutRef } from "react";

interface TextareaProps extends ComponentPropsWithoutRef<"textarea"> {
  label: string;
  containerClassName: string;
  labelClassName: string;
  textareaClassName: string;
}

const Textarea = ({
  label,
  containerClassName,
  labelClassName,
  textareaClassName,
  ...props
}: TextareaProps) => {
  return (
    <div className={`flex flex-col ${containerClassName}`}>
      <label className={labelClassName}>{label}</label>
      <textarea className={`resize-none ${textareaClassName}`} {...props} />
    </div>
  );
};

export default Textarea;
