import { InputType } from "@/core/utils/types";
import { ForwardedRef, forwardRef } from "react";
import FieldErrorMessage from "./FieldErrorMessage";

const Input = forwardRef(
  (data: InputType, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <div className="flex w-full flex-col space-y-1">
        <FieldErrorMessage message={data.error} />
        <input
          ref={ref}
          aria-required={data.dot}
          aria-invalid={!!data.error}
          type={data.type || "text"}
          disabled={data.disabled}
          readOnly={data.readOnly}
          placeholder={data.placeholder}
          className={`rounded-xl bg-white p-3 text-primary outline-none ring-0 placeholder:text-primary placeholder:text-opacity-50 dark:bg-light dark:bg-opacity-30 dark:text-light dark:placeholder:text-light dark:placeholder:text-opacity-50 ${data.className}`}
          {...data}
        />
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
