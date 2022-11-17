import useSidebar from "@/hooks/useSidebar";
import Menu from "../Icons/Menu";

const SidebarButton = () => {
  const { toggle } = useSidebar();

  return (
    <button
      className="flex p-2 duration-300 transform rounded-full aspect-square dark:bg-light dark:bg-opacity-10 bg-primary bg-opacity-10 backdrop-blur-md sm:hidden"
      onClick={toggle}
      aria-label="Open sidebar"
    >
      <Menu />
    </button>
  );
};

export default SidebarButton;
