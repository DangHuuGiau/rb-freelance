"use client";

import { useToggle } from "@/hooks/use-toggle";
import { cn } from "@/lib/utils";

const Hamburger = () => {
  const { isOpen, handleToggle } = useToggle();

  return (
    <div
      onClick={handleToggle}
      className="flex flex-col h-[17px] w-6 justify-between items-end cursor-pointer md:hidden z-50"
    >
      <span
        className={cn(
          "h-[3px] inline-block bg-foreground w-full rounded-full transition",
          isOpen
            ? "rotate-45 translate-y-[7px] w-full bg-secondary"
            : "rotate-0 translate-y-0"
        )}
      ></span>
      <span
        className={cn(
          "h-[3px] inline-block bg-foreground w-full rounded-full transition",
          isOpen ? "opacity-0" : "opacity-100"
        )}
      ></span>
      <span
        className={cn(
          "h-[3px] inline-block bg-foreground rounded-full transition",
          isOpen
            ? "-rotate-45 -translate-y-[7px] w-full bg-secondary"
            : "rotate-0 translate-y-0 w-2/3"
        )}
      ></span>
    </div>
  );
};

export default Hamburger;
