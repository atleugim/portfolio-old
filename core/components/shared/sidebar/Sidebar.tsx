import useSidebar from "@/hooks/useSidebar";
import { Routes } from "@/utils/routes";
import GlassContainer from "../GlassContainer";
import NavbarLink from "../Navbar/NavLink";
import CloseSidebar from "./CloseSidebar";

const Sidebar = () => {
  const { isOpen } = useSidebar();

  return (
    <GlassContainer
      className={`flex w-screen h-screen justify-center items-center bg-light dark:bg-primary fixed top-0 left-0 z-40 backdrop-blur-2xl transform duration-500 delay-200 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <nav className="flex items-center justify-center">
        <ul className="flex flex-col p-10 space-y-4">
          {Routes.getAll().map((link, index) => (
            <NavbarLink
              key={index}
              className="text-xl"
              index={index}
              link={link}
            />
          ))}
        </ul>
      </nav>
      <CloseSidebar className="fixed top-5 right-5" />
    </GlassContainer>
  );
};

export default Sidebar;
