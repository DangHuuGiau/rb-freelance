"use client";

import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { locales } from "@/lib/i18n/settings";
import { useLocale } from "next-intl";
import Image from "next/image";

export default function LanguageSwitcher() {
  const t = useTranslations("languageSwitcher");
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();

  const handleLocaleChange = (newLocale: string) => {
    if (newLocale === locale) return;

    const segments = pathname.split("/");
    segments.splice(0, 2);
    const newPath = `/${newLocale}${
      segments.length > 0 ? `/${segments.join("/")}` : ""
    }`;
    router.push(newPath);
  };

  return (
    <div className="flex gap-2 items-center border p-1 rounded-full bg-muted">
      {locales.map((loc) => (
        <button
          key={loc}
          onClick={() => handleLocaleChange(loc)}
          className={`w-4 h-4 rounded-full overflow-hidden border transition-all
            ${
              loc === locale
                ? "border-primary ring-2 ring-primary"
                : "border-transparent opacity-60 hover:opacity-100"
            }`}
        >
          <Image
            src={`/images/flags/${loc}.png`}
            alt={t(loc)}
            width={16}
            height={16}
            className="object-cover w-full h-full"
          />
        </button>
      ))}
    </div>
  );
}
