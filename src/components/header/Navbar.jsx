"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Drawer from "./Drawer";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { navlinks } from "./navData";
import { useState, useRef } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = (index) => {
    clearTimeout(timeoutRef.current);
    setOpenDropdown(index);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
  };

  const renderSubDropdown = (subdropdown) => {
    return subdropdown.map((subItem) => (
      <DropdownMenuSub key={subItem.name}>
        <DropdownMenuSubTrigger className="px-4 py-2">
          {subItem.name}
        </DropdownMenuSubTrigger>
        <DropdownMenuPortal>
          <DropdownMenuSubContent
            onMouseEnter={() => clearTimeout(timeoutRef.current)}
            onMouseLeave={handleMouseLeave}
          >
            {subItem.courses
              ? subItem.courses.map((course) => (
                  <DropdownMenuItem key={course.name} asChild>
                    <Link
                      href={course.path}
                      className={`w-full px-4 py-2 ${
                        pathname === course.path
                          ? "text-red-600"
                          : "hover:text-red-600"
                      }`}
                    >
                      {course.name}
                    </Link>
                  </DropdownMenuItem>
                ))
              : null}
          </DropdownMenuSubContent>
        </DropdownMenuPortal>
      </DropdownMenuSub>
    ));
  };

  const renderDropdownContent = (link) => {
    return (
      <DropdownMenuContent
        align="start"
        className="mt-2"
        onMouseEnter={() => clearTimeout(timeoutRef.current)}
        onMouseLeave={handleMouseLeave}
      >
        {link.dropdown?.map((item) => {
          if (item.subdropdown) {
            return renderSubDropdown(item.subdropdown);
          }

          return (
            <DropdownMenuItem key={item.name} asChild>
              <Link
                href={item.path}
                className={`w-full px-4 py-2 ${
                  pathname === item.path ? "text-red-600" : "hover:text-red-600"
                }`}
              >
                {item.name}
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    );
  };

  return (
    <div className="bg-red-600 px-4 py-4">
      <div className="w-full sm:max-w-[640px] md:max-w-[768px] lg:max-w-7xl xl:max-w-[1330px] 2xl:max-w-[1536px] mx-auto flex items-center justify-between overflow-hidden sm:h-20">
        <div className="flex items-center space-x-10">
          <Link href="/">
            <Image
              src="/assets/logo.png"
              alt="Indo Global Group of Colleges"
              width={80}
              height={80}
              className="h-16 sm:h-20 object-contain "
            />
          </Link>
          <Image
            src="/assets/23-logo.png"
            alt="23 Years"
            width={96}
            height={96}
            className="sm:h-24 h-20 object-contain"
          />
        </div>
        <nav>
          <ul className="hidden lg:flex space-x-4">
            {navlinks.map((link, index) => (
              <li
                key={link.name}
                className="relative"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {link.name === "Blogs" ? (
                  <a
                    href="/blog"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded px-3 py-2 text-white hover:bg-red-700 hover:text-red-200"
                  >
                    {link.name}
                  </a>
                ) : link.dropdown ? (
                  <DropdownMenu open={openDropdown === index}>
                    <DropdownMenuTrigger asChild>
                      <button
                        className={
                          link.dropdown.some((item) => item.path === pathname)
                            ? "rounded bg-red-700 px-3 py-2 -mt-2 text-red-100 outline-0"
                            : "rounded px-3 py-2 text-white -mt-2 hover:bg-red-700 hover:text-red-200"
                        }
                      >
                        {link.name}
                      </button>
                    </DropdownMenuTrigger>
                    {renderDropdownContent(link)}
                  </DropdownMenu>
                ) : (
                  <Link
                    href={link.path}
                    className={
                      pathname === link.path
                        ? "rounded bg-red-700 px-3 py-2 text-red-100"
                        : "rounded px-3 py-2 text-white hover:bg-red-700 hover:text-red-200"
                    }
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <Drawer />
        </nav>
      </div>
    </div>
  );
}
