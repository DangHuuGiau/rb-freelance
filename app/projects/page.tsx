import { CTA } from "@/components/cta";
import ProjectsHeader from "@/components/projects/header";
import { ProjectsDisplay } from "@/components/projects/projects-display";

export default function ProjectsPage() {
  return (
    <div className="py-14 md:py-16">
      <ProjectsHeader />
      <ProjectsDisplay />
      <CTA />
    </div>
  );
}
