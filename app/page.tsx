import { redirect } from "next/navigation";
import { defaultLocale } from "@/lib/i18n/settings";

export default function Home() {
  redirect(`/${defaultLocale}`);
}
