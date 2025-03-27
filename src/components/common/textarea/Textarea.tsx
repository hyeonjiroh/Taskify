interface TextareaProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  label: string;
  containerClassName: string;
  labelClassName: string;
  textareaClassName: string;
}

const Textarea = ({
  value,
  onChange,
  placeholder,
  label,
  containerClassName,
  labelClassName,
  textareaClassName,
}: TextareaProps) => {
  return (
    <div className={`flex flex-col ${containerClassName}`}>
      <label className={labelClassName}>{label}</label>
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`resize-none ${textareaClassName}`}
      ></textarea>
    </div>
  );
};

export default Textarea;
