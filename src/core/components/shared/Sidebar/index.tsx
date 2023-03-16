import useSidebar from "@/core/hooks/useSidebar";
import { Routes } from "@/core/utils/routes";
import { useLockScroll } from "atleugim-hooks";
import { useEffect } from "react";
import GlassContainer from "../GlassContainer";
import NavbarLink from "../Navbar/NavLink";
import CloseSidebar from "./CloseSidebar";

const Sidebar = () => {
  const { isOpen } = useSidebar();
  const { lock, unlock } = useLockScroll();

  useEffect(() => {
    if (isOpen) {
      lock();
      return;
    }

    unlock();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <GlassContainer
      className={`fixed top-0 left-0 z-40 flex h-full w-full transform items-center justify-center bg-light bg-opacity-30 backdrop-blur-2xl duration-300 dark:bg-primary dark:bg-opacity-30 sm:hidden ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <nav className="flex items-center justify-center">
        <ul className="flex flex-col items-center space-y-4 p-10">
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
