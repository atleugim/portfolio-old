import useSidebar from "@/hooks/useSidebar";
import { Route } from "@/utils/types";
import Link from "next/link";

interface NavbarLink {
  link: Route;
  index: number;
  className?: string;
}

const NavbarLink = ({ link, index, className = "text-sm" }: NavbarLink) => {
  const { isOpen, toggle } = useSidebar();

  const handleOnClick = () => {
    if (isOpen) {
      toggle();
    }
  };

  return (
    <Link href={link.href} passHref>
      <li
        onClick={handleOnClick}
        className={`flex py-1 space-x-1 list-none rounded-md cursor-pointer ${className}`}
      >
        <span className="text-secondary">0{index + 1}.</span>
        <span className="duration-300 hover:text-secondary">{link.name}</span>
      </li>
    </Link>
  );
};

export default NavbarLink;
