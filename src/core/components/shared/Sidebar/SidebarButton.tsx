import useSidebar from "@/core/hooks/useSidebar";
import Menu from "../Icons/Menu";

const SidebarButton = () => {
  const { toggle } = useSidebar();

  return (
    <button
      className="flex aspect-square transform rounded-full bg-primary bg-opacity-10 p-2 backdrop-blur-md duration-300 dark:bg-light dark:bg-opacity-10 sm:hidden"
      onClick={toggle}
      aria-label="Open sidebar"
    >
      <Menu />
    </button>
  );
};

export default SidebarButton;
