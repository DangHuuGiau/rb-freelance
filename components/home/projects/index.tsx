"use client";

import SectionTag from "@/components/section-tag";
import Wrapper from "@/components/wrapper";
import { ProjectsData } from "@/data/home/projects";
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

const Projects = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true })
  );
  return (
    <section className="bg- py-20">
      <SectionTag>{ProjectsData.tag}</SectionTag>
      <Wrapper className="mt-10">
        <h2 className="capitalize text-2xl text-headerFg mb-10 font-semibold">
          {ProjectsData.title}
        </h2>
        <Carousel
          opts={{
            align: "center",
            loop: true,
            slidesToScroll: "auto",
          }}
          plugins={[plugin.current]}
          className="w-fi"
          // onMouseEnter={plugin.current.stop}
          // onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {ProjectsData.works.map((project, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/3 lg:basis-1/4 pl-0 md:ml-8 rounded-md overflow-hidden relative"
              >
                <Image
                  src={project.imageUrl}
                  width={486}
                  height={613}
                  alt={project.name}
                  className="object-contain object-center mx-auto"
                />
                <div className="absolute bottom-5 text-center w-full text-white capitalize bg-black/70 py-4">
                  <h4 className="font-medium text-xs">{project.name}</h4>
                  <p className="text-[0.65rem]">{project.tag}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Wrapper>
    </section>
  );
};

export default Projects;
