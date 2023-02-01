import { Component, SidebarContextType } from "@/utils/types";
import { createContext, useState } from "react";

export const SidebarContext = createContext<SidebarContextType | null>(null);

const SidebarProvider = ({ children }: Component) => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <SidebarContext.Provider value={{ isOpen, toggle }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
