"use client";

import { ToggleProvider } from "./toggle-provider";
import { ThemeProvider } from "next-themes";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ToggleProvider>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </ToggleProvider>
    </>
  );
};

export default Providers;
