import { FieldError } from "react-hook-form";

interface FieldErrorMessageProps {
  message?: FieldError;
  className?: string;
  textAlign?: "text-start" | "text-center" | "text-end";
}

const FieldErrorMessage = ({
  message,
  className = "",
  textAlign = "text-end",
}: FieldErrorMessageProps) => {
  if (!message) return null;

  return (
    <div
      className={`w-full text-xs text-secondary whitespace-nowrap line-clamp-1 ${textAlign} ${className}`}
    >
      {message.message}
    </div>
  );
};

export default FieldErrorMessage;
