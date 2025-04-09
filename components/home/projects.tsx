import SectionTag from "@/components/section-tag";
import Wrapper from "@/components/wrapper";
import { ProjectsData } from "@/data/projects";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Projects = ({ t }: { t: (key: string) => string }) => {
  return (
    <section className="bg- py-20">
      <SectionTag>{t("projects.tag")}</SectionTag>
      <Wrapper className="mt-10 space-y-4">
        <div className="mb-10 space-y-4 max-md:text-center">
          <h2 className="capitalize text-2xl text-headerFg font-semibold">
            {t("projects.title")}
          </h2>
          <div className="flex flex-col md:flex-row justify-between">
            <p className="text-sm max-w-2xl">{t("projects.description")}</p>
            <Button variant="outline" className="max-md:hidden" asChild>
              <Link href={t("projects.cta.path")}>
                {t("projects.cta.label")}
              </Link>
            </Button>
          </div>
        </div>
        <Carousel
          opts={{
            align: "center",
            loop: true,
            slidesToScroll: "auto",
          }}
        >
          <CarouselContent>
            {Array.from({ length: 8 }).map((_, i) => (
              <CarouselItem
                key={i}
                className="md:basis-1/3 lg:basis-1/4 pl-0 md:ml-8 rounded-md overflow-hidden relative"
              >
                <div className="top-0 left-0 w-full h-full bg-black/30 z-10">
                  <Image
                    src={t(`projects.works.${i}.imageUrl`)}
                    width={486}
                    height={613}
                    alt={t(`projects.works.${i}.name`)}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div className="absolute bottom-5 text-center w-full text-white capitalize bg-black/70 py-4">
                  <h4 className="font-medium text-xs">
                    {t(`projects.works.${i}.name`)}
                  </h4>
                  <p className="text-[0.65rem]">
                    {t(`projects.works.${i}.tag`)}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="md:hidden text-center">
          <Button variant="outline" asChild>
            <Link href={t("projects.cta.path")}>{t("projects.cta.label")}</Link>
          </Button>
        </div>
      </Wrapper>
    </section>
  );
};

export default Projects;
