import useLockedBody from "@/hooks/useLockedBody";
import useSidebar from "@/hooks/useSidebar";
import { ComponentWithoutChildren } from "@/utils/types";
import { useEffect } from "react";
import Close from "../icons/Close";

const CloseSidebar = ({ className }: ComponentWithoutChildren) => {
  const { isOpen, toggle } = useSidebar();
  const { setLocked } = useLockedBody();

  useEffect(() => {
    if (isOpen) {
      setLocked(true);
    } else {
      setLocked(false);
    }
  }, [isOpen, setLocked]);

  return (
    <button
      className={`flex p-2 duration-300 transform rounded-full aspect-square dark:bg-light dark:bg-opacity-10 bg-primary bg-opacity-10 backdrop-blur-md sm:hidden ${className}`}
      onClick={toggle}
      aria-label="Close sidebar"
    >
      <Close />
    </button>
  );
};

export default CloseSidebar;
