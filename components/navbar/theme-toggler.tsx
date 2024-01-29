"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { TbSun, TbMoon } from "react-icons/tb";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-6 w-6 bg-transparent"></div>;
  return (
    <div className="cursor-pointer">
      <TbSun
        className="hidden dark:inline-block text-2xl"
        onClick={() => setTheme("light")}
      />
      <TbMoon
        className="dark:hidden text-2xl text-secondaryColor"
        onClick={() => setTheme("dark")}
      />
    </div>
  );
};

export default ThemeToggler;
