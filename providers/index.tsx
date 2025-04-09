"use client";

import { ToggleProvider } from "./toggle-provider";
import { ThemeProvider } from "next-themes";
import { LazyMotion, domAnimation } from "framer-motion";
import I18nProvider from "./i18n-provider";

interface ProvidersProps {
  children: React.ReactNode;
  locale: string;
  messages: any;
}

const Providers = ({ children, locale, messages }: ProvidersProps) => {
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
            <I18nProvider locale={locale} messages={messages}>
              {children}
            </I18nProvider>
          </ThemeProvider>
        </ToggleProvider>
      </LazyMotion>
    </>
  );
};

export default Providers;
