"use client";

import { Routes } from "@/data/navbar";
import { useToggle } from "@/hooks/use-toggle";
import { cn } from "@/lib/utils";
import Link from "next/link";
import ThemeToggler from "./theme-toggler";
import { usePathname } from "next/navigation";

const MobileMenu = () => {
  const { isOpen, handleToggle } = useToggle();
  const pathname = usePathname();
  return (
    <ul
      className={cn(
        "fixed top-0 bottom-0 md:hidden bg-background flex flex-col items-center justify-center gap-6 capitalize font-medium tracking-wide transition-all w-full",
        isOpen ? "left-0" : "-left-full"
      )}
    >
      {Routes.map((route) => (
        <li key={route.label}>
          <Link
            href={route.path}
            onClick={handleToggle}
            className={cn(
              "transition relative hover:text-secondary",
              pathname === route.path &&
                route.path !== "/contact" &&
                "text-headerFg scale-110 cursor-default hover:text-headerFg border-b border-b-headerFg",
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
      <div className="absolute bottom-5">
        <ThemeToggler />
      </div>
    </ul>
  );
};

export default MobileMenu;
