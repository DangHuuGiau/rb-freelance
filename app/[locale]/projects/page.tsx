import { CTA } from "@/components/cta";
import Services from "@/components/home/services";
import ProjectsHeader from "@/components/projects/header";
import { ProjectsDisplay } from "@/components/projects/projects-display";
import { getTranslations } from "next-intl/server";

export default async function ProjectsPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "projects" });
  return (
    <div className="py-14 md:py-16">
      <ProjectsHeader t={t} />
      <Services t={t} />
      <ProjectsDisplay t={t} />
      <CTA t={t} />
    </div>
  );
}
