import useIsSSR from "@/hooks/useIsSSR";
import { Routes } from "@/utils/routes";
import ToggleDarkMode from "../dark-mode/ToggleDarkMode";
import GlassContainer from "../GlassContainer";
import SidebarButton from "../Sidebar/SidebarButton";
import Wrapper from "../Wrapper";
import NavbarLink from "./NavLink";

const Navbar = () => {
  const isSSR = useIsSSR();

  if (isSSR) return null;

  return (
    <GlassContainer className="sticky top-0 z-10 dark:bg-primary bg-light">
      <Wrapper className="justify-between">
        <nav className="hidden sm:flex">
          <ul className="flex space-x-4">
            {Routes.getAll().map((link, index) => (
              <NavbarLink key={index} index={index} link={link} />
            ))}
          </ul>
        </nav>

        <SidebarButton />
        <ToggleDarkMode />
      </Wrapper>
    </GlassContainer>
  );
};

export default Navbar;
