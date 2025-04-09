import { CTA } from "@/components/cta";
import AboutUs from "@/components/home/about-us";
import Header from "@/components/home/header";
import Projects from "@/components/home/projects";
import WhyChooseUs from "@/components/home/why-choose-us";
import Services from "@/components/home/services";
import Testimonials from "@/components/home/testimonials";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "home" });

  return {
    title: "RB Solutions - Home",
    description: t("hero.subtitle"),
  };
}

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "home" });

  return (
    <div className="pb-14 md:pb-16">
      <Header t={t} />
      <WhyChooseUs t={t} />
      <AboutUs t={t} />
      <Services t={t} />
      <Projects t={t} />
      <Testimonials t={t} />
      <CTA t={t} />
    </div>
  );
}
