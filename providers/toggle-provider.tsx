"use client";

import { ToggleContext } from "@/contexts/toggle-context";
import { useEffect, useState } from "react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)"); // Adjust max-width as needed
    setIsMobile(mediaQuery.matches);

    const handleResize = () => setIsMobile(mediaQuery.matches);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);
  return isMobile;
};

export const ToggleProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  function handleToggle() {
    setIsOpen((open) => !open);
  }

  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      if (isOpen && isMobile) {
        body.style.overflow = "hidden";
      } else {
        body.style.overflow = "auto";
      }
    }
  }, [isOpen, isMobile]);

  return (
    <ToggleContext.Provider
      value={{ isOpen: isOpen, handleToggle: handleToggle }}
    >
      {children}
    </ToggleContext.Provider>
  );
};
