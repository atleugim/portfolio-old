import useSidebar from "@/core/hooks/useSidebar";
import { ComponentWithoutChildren } from "@/core/utils/types";
import Close from "../Icons/Close";

const CloseSidebar = ({ className }: ComponentWithoutChildren) => {
  const { toggle } = useSidebar();

  return (
    <button
      className={`flex aspect-square transform rounded-full bg-primary bg-opacity-10 p-2 backdrop-blur-md duration-300 dark:bg-light dark:bg-opacity-10 sm:hidden ${className}`}
      onClick={toggle}
      aria-label="Close sidebar"
    >
      <Close />
    </button>
  );
};

export default CloseSidebar;
