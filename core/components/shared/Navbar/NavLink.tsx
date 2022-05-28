import { Route } from "@/utils/types";
import Link from "next/link";

interface NavbarLink {
  link: Route;
  index: number;
}

const NavbarLink = ({ link, index }: NavbarLink) => {
  return (
    <Link href={link.href} passHref>
      <li className="flex py-1 space-x-1 text-sm list-none rounded-md">
        <span className="text-secondary">0{index + 1}.</span>
        <span className="duration-300 hover:text-secondary">{link.name}</span>
      </li>
    </Link>
  );
};

export default NavbarLink;
