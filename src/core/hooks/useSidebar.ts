import { useContext } from "react";
import { SidebarContext } from "../providers/sidebar";
import { SidebarContextType } from "../utils/types";

const useSidebar = () => {
  const { isOpen, toggle } = useContext(SidebarContext) as SidebarContextType;

  return { isOpen, toggle };
};

export default useSidebar;
