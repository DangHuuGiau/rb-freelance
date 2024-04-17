"use client";

import { Routes } from "@/data/navbar";
import Link from "next/link";
import "@/app/globals.css";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import ThemeToggler from "./theme-toggler";

const DesktopMenu = () => {
  const pathname = usePathname();
  return (
    <ul className="hidden md:flex capitalize md:gap-10 lg:gap-12 md:text-sm lg:text-[15px] whitespace-nowrap items-center">
      {Routes.map((route) => (
        <li key={route.label}>
          <Link
            href={route.path}
            className={cn(
              "transition relative hover:text-secondary",
              pathname === route.path &&
                route.path !== "/contact" &&
                "text-headerFg scale-110 cursor-default hover:text-headerFg",
              route.path === "/contact" &&
                "font-semibold text-white hover:text-white h-9 inline-flex items-center justify-center px-5 bg-secondary hover:bg-secondary/80 rounded-md",
              pathname === "/contact" &&
                route.path === "/contact" &&
                "bg-secondaryBg hover:bg-secondaryBg text-headerFg hover:text-headerFg cursor-default"
            )}
          >
            {route.label}
          </Link>
        </li>
      ))}

      <ThemeToggler />
    </ul>
  );
};

export default DesktopMenu;
