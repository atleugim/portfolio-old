import useSidebar from "@/core/hooks/useSidebar";
import { Language, Route } from "@/core/utils/types";
import Link from "next/link";
import { useTranslation } from "react-i18next";

interface NavbarLink {
  link: Route;
  index: number;
  className?: string;
}

const NavbarLink = ({ link, index, className = "text-sm" }: NavbarLink) => {
  const { isOpen, toggle } = useSidebar();
  const { i18n } = useTranslation();

  const handleOnClick = () => {
    if (isOpen) {
      toggle();
    }
  };

  return (
    <li
      onClick={handleOnClick}
      className={`flex cursor-pointer list-none space-x-1 rounded-md py-1 ${className}`}
    >
      <Link href={link.href} passHref>
        <span className="text-secondary">0{index + 1}.</span>
        <span className="duration-300 hover:text-secondary">
          {link.name[i18n.language as keyof Language]}
        </span>
      </Link>
    </li>
  );
};

export default NavbarLink;
