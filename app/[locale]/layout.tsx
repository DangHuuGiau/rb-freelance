import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/navbar";
import Providers from "@/providers";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/footer";
import { cn } from "@/lib/utils";
import { getTranslations } from "next-intl/server";
import { locales } from "@/lib/i18n/settings";

const work_sans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: "RB Solutions",
  description:
    "RB Solutions is a team of expert developers offering outsourcing services, delivering high-quality solutions to clients worldwide.",
};

// Generate static params for all supported locales
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Import messages for the current locale
  const messages = (await import(`../../messages/${locale}/common.json`))
    .default;

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={cn(
          "relative antialiased text-bodyFg flex flex-col min-h-screen",
          work_sans.className,
          work_sans.variable
        )}
      >
        <Providers locale={locale} messages={messages}>
          <Navbar />
          <main className="flex-grow flex-1">{children}</main>
          <Footer />
          <Toaster position="top-right" richColors />
        </Providers>
      </body>
    </html>
  );
}
