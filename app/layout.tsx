import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Providers from "@/providers";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/footer";
import { cn } from "@/lib/utils";

const work_sans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: "RB Freelance",
  description:
    "RB Freelance is a team of expert freelancers offering outsourcing services, delivering high-quality solutions to clients worldwide.",
  icons: {
    icon: "/rb-freelance.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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
        <Providers>
          <Navbar />
          <main className="flex-grow flex-1">{children}</main>
          <Footer />
          <Toaster position="top-right" richColors />
        </Providers>
      </body>
    </html>
  );
}
