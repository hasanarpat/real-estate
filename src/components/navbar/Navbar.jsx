import React from "react";
import DarkModeToggle from "../darkModeToggleButton/DarkModeToggle";
import Link from "next/link";
import Menu from "../menu/Menu";
import { GiMushroomHouse } from "react-icons/gi";
import ProfileDropdown from "../profileDropdown/ProfileDropdown";

const links = [
  {
    title: "Hotels",
    url: "/hotels",
    id: 3,
  },
  {
    title: "Houses",
    url: "/houses",
    id: 4,
  },
  {
    title: "Pricing",
    url: "/pricing",
    id: 1,
  },
  {
    title: "Contact",
    url: "/contact",
    id: 2,
  },
];

const Navbar = () => {
  return (
    <div className=" h-12 lg:h-24 p-2 lg:p-4 lg:px-12 flex items-center justify-between lg:text-lg hover:dark:bg-slate-700 dark:hover:text-gray-400 hover:bg-slate-200 transition-all duration-75 ease-linear">
      <Link
        href="/"
        className="flex items-center gap-2 text-2xl cursor-pointer font-extrabold "
      >
        CrowState <GiMushroomHouse />
      </Link>{" "}
      <div className="hidden lg:flex items-center justify-between w-1/3">
        <DarkModeToggle />
        {links.map((link) => (
          <Link href={link.url} key={link.id}>
            {link.title}
          </Link>
        ))}
        <ProfileDropdown />
      </div>
      <Menu />
    </div>
  );
};

export default Navbar;
