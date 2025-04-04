import Image from "next/image";
import Wrapper from "../wrapper";
import { cn } from "@/lib/utils";
import { ProjectsData } from "@/data/projects";
import { SlideUpTransition } from "../slide-transitions";

export const ProjectsDisplay = () => {
  return (
    <section className="py-12 border-y">
      <Wrapper className="space-y-12">
        <div className="space-y-6 text-center">
          <SlideUpTransition className="max-w-3xl space-y-2 mx-auto">
            <h2 className="text-2xl font-medium text-headerFg">
              At RedBean Software
            </h2>
            <p>
              We&apos;ve been fortunate to collaborate with a diverse array of
              clients, delivering outstanding projects that drive success.
            </p>
          </SlideUpTransition>
          <SlideUpTransition className="px-3 py-1.5 bg-secondaryBg rounded-md text-headerFg w-fit text-sm mx-auto">
            Here are some standout examples of our remarkable projects:
          </SlideUpTransition>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 border border-b-0">
          {ProjectsData.works.map((item, idx) => (
            <SlideUpTransition key={idx} custom={idx}>
              <ProjectCard
                idx={idx}
                projectName={item.name}
                projectTag={item.tag}
                imageUrl={item.imageUrl}
                projectDescription={item.description}
                projectLocation={item.location}
              />
            </SlideUpTransition>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

const ProjectCard = ({
  idx,
  projectName,
  projectTag,
  imageUrl,
  projectDescription,
  projectLocation,
}: {
  idx: number;
  projectName: string;
  projectTag: string;
  imageUrl: string;
  projectDescription: string;
  projectLocation: string;
}) => {
  return (
    <div
      className={cn(
        "px-6 divide-y border-b pb-10",
        idx % 2 === 0 && "border-r"
      )}
    >
      <h3 className="text- font-medium py-2">{projectTag}</h3>
      <div className="py-5 h-80 relative">
        <Image
          src={imageUrl}
          alt="chic boutique"
          fill
          className="object-cover object-center rounded"
        />
      </div>
      <div className="py-5 space-y-4">
        <div className="space-y-1">
          <h3 className="text-headerFg font-medium capitalize">
            {projectName}
          </h3>
          <p className="text-xs px-2 py-1 bg-secondaryBg w-fit rounded-md">
            {projectLocation}
          </p>
        </div>
        <p className="text-sm text-bodyFg">{projectDescription}</p>
      </div>
    </div>
  );
};
