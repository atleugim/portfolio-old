import { TextAreaType } from "@/utils/types";
import { ForwardedRef, forwardRef } from "react";
import FieldErrorMessage from "./FieldErrorMessage";

const TextArea = forwardRef(
  (data: TextAreaType, ref: ForwardedRef<HTMLTextAreaElement>) => {
    return (
      <div className="flex flex-col w-full space-y-1">
        <FieldErrorMessage message={data.error} />
        <textarea
          ref={ref}
          aria-required={data.dot}
          aria-invalid={!!data.error}
          disabled={data.disabled}
          readOnly={data.readOnly}
          placeholder={data.placeholder}
          rows={data.rows || 5}
          className={`p-3 rounded-xl dark:text-light text-primary bg-white dark:bg-light dark:bg-opacity-30 outline-none ring-0 placeholder:text-opacity-50 dark:placeholder:text-opacity-50 placeholder:text-primary dark:placeholder:text-light resize-none ${data.className}`}
          {...data}
        />
      </div>
    );
  }
);

TextArea.displayName = "TextArea";
export default TextArea;
