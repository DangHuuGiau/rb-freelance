import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

export default getRequestConfig(async ({ locale }) => {
  if (!locale?.includes(locale as any)) {
    notFound();
  }
  // Load messages for the requested locale
  return {
    messages: (await import(`../../messages/${locale}/common.json`)).default,
    locale: locale,
  };
});
