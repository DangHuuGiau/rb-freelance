import CoreValues from "@/components/about-us/core-values";
import Header from "@/components/about-us/header";
import OurAchievements from "@/components/about-us/our-achievements";
import OurHistory from "@/components/about-us/our-history";
import { Team } from "@/components/about-us/team";
import { CTA } from "@/components/cta";
import { getTranslations } from "next-intl/server";

export default async function About({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "aboutUs" });
  return (
    <div className="py-14 md:py-16">
      <Header t={t} />
      <OurHistory t={t} />
      <CoreValues t={t} />
      <OurAchievements t={t} />
      <Team t={t} />
      <CTA t={t} />
    </div>
  );
}
