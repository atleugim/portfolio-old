import { TextAreaType } from "@/utils/types";

const TextArea = (data: TextAreaType) => {
  return (
    <div className="flex flex-col w-full space-y-1">
      {data.label && <label htmlFor={data.id}>{data.label}</label>}
      <textarea
        id={data.id}
        name={data.name}
        defaultValue={data.defaultValue}
        disabled={data.disabled}
        readOnly={data.readOnly}
        required={data.required || false}
        placeholder={data.placeholder}
        rows={data.rows || 5}
        className={`p-3 rounded-xl dark:text-light text-primary bg-white dark:bg-light dark:bg-opacity-30 font-medium outline-none ring-0 placeholder:text-opacity-50 dark:placeholder:text-opacity-50 placeholder:text-primary dark:placeholder:text-light ${data.className}`}
        onChange={data.onChange}
      />
    </div>
  );
};

export default TextArea;
