"use client";
import Link from "next/link";
import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";

const links = [
  {
    title: "Settings",
    url: "/profile",
    id: 3,
  },
  {
    title: "Favorites",
    url: "/profile",
    id: 4,
  },
  {
    title: "Messages",
    url: "/profile",
    id: 1,
  },
  {
    title: "Create Advert",
    url: "/contact",
    id: 2,
  },
  {
    title: "Credentials",
    url: "/profile",
    id: 134,
  },
  {
    title: "Global estates",
    url: "/contact",
    id: 122,
  },
];

const ProfileDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleOpen = () => {
    setShowDropdown((prev) => !prev);
    console.log(showDropdown);
  };

  return (
    <>
      <Link
        href="/profile"
        className="flex items-start gap-1 relative cursor-pointer"
        onClick={handleOpen}
      >
        Profile <CgProfile className="text-2xl" />
        {showDropdown && (
          <div className="absolute top-20 z-10 -left-28 w-48 bg-gray-400 bg-opacity-50 py-8 px-4 rounded-tr-none border rounded-xl text-slate-50 before:content-['▴'] before:text-gray-400 before:opacity-50 before:absolute before:-top-12 before:-right-4  before:text-7xl">
            <ul className="flex flex-col items-start gap-2">
              {links.map((link) => (
                <li
                  key={link.id}
                  className="hover:bg-gray-500 hover:border-l-4 hover:rounded-l-none hover:border-gray-50 hover:text-xl hover:pl-2 w-full rounded-md transition-colors duration-100 ease-linear"
                >
                  <Link href={link.url}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Link>
    </>
  );
};

export default ProfileDropdown;
