import { TextAreaType } from "@/utils/types";

const TextArea = (data: TextAreaType) => {
  return (
    <div className="flex flex-col w-full">
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
        className={`p-3 rounded-xl dark:text-primary text-light bg-primary dark:bg-light font-medium outline-none ring-0 ${data.className}`}
        onChange={data.onChange}
      />
    </div>
  );
};

export default TextArea;
