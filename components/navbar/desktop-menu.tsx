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
    <ul className="hidden md:flex capitalize md:gap-10 lg:gap-12 md:text-sm lg:text-[15px] whitespace-nowrap">
      {Routes.map((route) => (
        <li key={route.label}>
          <Link
            href={route.path}
            className={cn(
              "transition relative hover:text-secondary",
              pathname === route.path ? "nav-link" : "",
              route.label === "contact us"
                ? "font-semibold text-secondary hover:text-primary"
                : ""
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
