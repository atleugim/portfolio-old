import useLockScroll from "@/hooks/useLockScroll";
import useSidebar from "@/hooks/useSidebar";
import { Routes } from "@/utils/routes";
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
      className={`flex sm:hidden w-screen h-screen justify-center items-center bg-light bg-opacity-30 dark:bg-opacity-30 dark:bg-primary fixed top-0 left-0 z-40 backdrop-blur-2xl transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <nav className="flex items-center justify-center">
        <ul className="flex flex-col items-center p-10 space-y-4">
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
