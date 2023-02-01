import { Button } from "@/core/utils/types";
import Link from "next/link";
import Spinner from "./Icons/Spinner";

const Button = ({
  children,
  childrenPosition,
  className,
  onClick,
  type = "button",
  disabled = false,
  text,
  isNavigation = false,
  target = "_self",
  href = "",
  isLoading = false,
}: Button) => {
  const child = (
    <div className="flex w-full items-center justify-center space-x-4">
      {childrenPosition === "start" && children}
      <span className="link-underline">{text}</span>
      {childrenPosition === "end" && children}
    </div>
  );
  return (
    <div
      className={`btn flex items-center justify-center ${
        disabled ? "cursor-not-allowed opacity-60" : "opacity-100"
      }`}
    >
      {isNavigation ? (
        <Link
          href={href}
          passHref
          target={target}
          className={`${className} ${
            isLoading ? "py-1" : "py-2"
          } rounded-md border border-primary px-2 text-xs font-bold uppercase duration-300 hover:bg-opacity-90 dark:border-gray-200`}
        >
          {isLoading ? (
            <Spinner className="text-primary dark:text-light" />
          ) : (
            child
          )}
        </Link>
      ) : (
        <button
          className={`${className} ${
            isLoading ? "py-1" : "py-2"
          } rounded-md border border-primary px-2 text-xs font-bold uppercase duration-300 hover:bg-opacity-90 dark:border-gray-200`}
          onClick={onClick}
          type={type}
          disabled={disabled}
        >
          {isLoading ? (
            <Spinner className="text-primary dark:text-light" />
          ) : (
            child
          )}
        </button>
      )}
    </div>
  );
};

export default Button;
