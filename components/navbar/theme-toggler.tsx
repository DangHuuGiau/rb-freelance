"use client";

import { useToggle } from "@/hooks/use-toggle";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { TbSun, TbMoon } from "react-icons/tb";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { handleToggle } = useToggle();

  useEffect(() => {
    setMounted(true);
  }, []);

  function handleThemeToggle(themeName: string) {
    handleToggle();
    setTheme(themeName);
  }

  if (!mounted) return <div className="h-6 w-6 bg-transparent"></div>;
  return (
    <div className="cursor-pointer">
      <TbSun
        className="hidden dark:inline-block text-base"
        onClick={() => handleThemeToggle("light")}
      />
      <TbMoon
        className="dark:hidden text-base text-secondaryColor"
        onClick={() => handleThemeToggle("dark")}
      />
    </div>
  );
};

export default ThemeToggler;
