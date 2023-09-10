import React from "react";
import DarkModeToggle from "../darkModeToggleButton/DarkModeToggle";
import Link from "next/link";

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
    title: "Profile",
    url: "/profile",
    id: 5,
  },
  {
    title: "About",
    url: "/about",
    id: 1,
  },
  {
    title: "Contact",
    url: "/contact",
    id: 2,
  }
];

const Navbar = () => {
  return (
    <div className=" h-12 lg:h-24 p-2 lg:p-4 lg:px-12 flex items-center justify-between lg:text-lg hover:dark:bg-slate-700 hover:bg-slate-200 transition-all duration-75 ease-linear">
      Navbar 
      <div className="flex items-center justify-between w-1/3"><DarkModeToggle />
      {
        links.map((link)=>(
          <Link href={link.url} key={link.id}>{link.title}</Link>
        ))
      }
      </div>
    </div>
  );
};

export default Navbar;
