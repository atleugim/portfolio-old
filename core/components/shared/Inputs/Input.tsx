import { InputType } from "@/utils/types";
import { ForwardedRef, forwardRef } from "react";
import FieldErrorMessage from "./FieldErrorMessage";

const Input = forwardRef(
  (data: InputType, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <div className="flex flex-col w-full space-y-1">
        <FieldErrorMessage message={data.error} />
        <input
          ref={ref}
          aria-required={data.dot}
          aria-invalid={!!data.error}
          type={data.type || "text"}
          disabled={data.disabled}
          readOnly={data.readOnly}
          placeholder={data.placeholder}
          className={`p-3 rounded-xl dark:text-light text-primary bg-white dark:bg-light dark:bg-opacity-30 outline-none ring-0 placeholder:text-primary placeholder:text-opacity-50 dark:placeholder:text-opacity-50 dark:placeholder:text-light ${data.className}`}
          {...data}
        />
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
