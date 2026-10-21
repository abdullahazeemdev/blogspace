"use client";

import Link from "next/link";
import { Home, User } from "lucide-react";

import React from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();

  const navlinks = [
    { title: "Home", path: "/", icon: <Home size={18} /> },
    { title: "About", path: "/about", icon: <User size={18} /> },
  ];

  return (
    <header className="w-full bg-white border-b border-gray-100 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link href="/" className="text-2xl font-bold text-gray-900 tracking-tight">
          Blog<span className="text-blue-600">Space.</span>
        </Link>

        <div className="flex items-center gap-8">
        {navlinks.map((links) => {
          const isActive = pathName === links.path;
          return (
            <Link
              key={links.path}
              href={links.path}
              className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all ${
                isActive
                  ? "text-blue-400 bg-gray-800 border-b-2 border-blue-400"
                  : "text-gray-300 hover:text-white hover:bg-gray-800"
              }`}
            >
              {links.icon}
              <span>{links.title}</span>
            </Link>
          );
        })}
        </div>

        <div>
          <Link
            href="/createBlogs"
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2.5 rounded-xl shadow-md shadow-blue-500/20 transition-all active:scale-95 inline-block"
          >
            Create Blog
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
