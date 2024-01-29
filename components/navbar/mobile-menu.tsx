"use client";

import { Routes } from "@/data/navbar";
import { useToggle } from "@/hooks/use-toggle";
import { cn } from "@/lib/utils";
import Link from "next/link";
import ThemeToggler from "./theme-toggler";

const MobileMenu = () => {
  const { isOpen } = useToggle();
  return (
    <ul
      className={cn(
        "fixed top-0 bottom-0 md:hidden bg-background flex flex-col items-center justify-center gap-6 capitalize font-medium tracking-wide transition-all w-full",
        isOpen ? "left-0" : "-left-full"
      )}
    >
      {Routes.map((route) => (
        <li key={route.label}>
          <Link href={route.path}>{route.label}</Link>
        </li>
      ))}
      <div className="absolute bottom-5">
        <ThemeToggler />
      </div>
    </ul>
  );
};

export default MobileMenu;
