"use client";

import { ToggleProvider } from "./toggle-provider";
import { ThemeProvider } from "next-themes";
import { LazyMotion, domAnimation } from "framer-motion";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <LazyMotion features={domAnimation} strict>
        <ToggleProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </ToggleProvider>
      </LazyMotion>
    </>
  );
};

export default Providers;
