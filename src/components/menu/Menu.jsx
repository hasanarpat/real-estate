"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import DarkModeToggle from "../darkModeToggleButton/DarkModeToggle";

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
  },
];

const Menu = () => {
  const [openMenu, setopenMenu] = useState(false);

  return (
    <div className="lg:hidden">
      {openMenu ? (
        <Image
          alt="open"
          src="/close.png"
          width={20}
          height={20}
          onClick={() => setopenMenu((prev) => !prev)}
          className=" cursor-pointer"
        />
      ) : (
        <Image
          alt="open"
          src="/open.png"
          width={20}
          height={20}
          onClick={() => setopenMenu((prev) => !prev)}
          className=" cursor-pointer"
        />
      )}
      {openMenu && (
        <div className="absolute bg-slate-400 flex flex-col items-end gap-20 p-4 top-0 left-0 right-0 bottom-0 w-[100dvw]">
          <Image
            alt="open"
            src="/close.png"
            width={20}
            height={20}
            onClick={() => setopenMenu((prev) => !prev)}
          className=" cursor-pointer"
          />
          <div className="flex flex-col items-end w-full h-1/2 gap-2 justify-between text-white">
            {links.map((link) => (
              <Link
                href={link.url}
                key={link.id}
                className="hover:bg-slate-500 rounded-md w-full h-full flex items-center justify-center text-2xl transition-all duration-100 ease-in cursor-pointer"
                onClick={() => setopenMenu(false)}
              >
                {link.title}
              </Link>
            ))}
            <div className="w-full flex items-center justify-center">
              <DarkModeToggle />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
