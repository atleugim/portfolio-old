import { Component } from "@/utils/types";
import SidebarProvider from "./sidebar";

const MainProvider = ({ children }: Component) => {
  return <SidebarProvider>{children}</SidebarProvider>;
};

export default MainProvider;
