"use client";

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
import CustomButton from "../custom-button";
import { Button } from "../ui/button";
import Link from "next/link";

const Projects = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true })
  );
  return (
    <section className="bg- py-20">
      <SectionTag>{ProjectsData.tag}</SectionTag>
      <Wrapper className="mt-10 space-y-4">
        <div className="mb-10 space-y-4 max-md:text-center">
          <h2 className="capitalize text-2xl text-headerFg font-semibold">
            {ProjectsData.title}
          </h2>
          <div className="flex flex-col md:flex-row justify-between">
            <p className="text-sm max-w-2xl">
              Discover our curated collection of standout projects. Each listing
              showcases remarkable constructions and investments available
              through our company.
            </p>
            <Button variant="outline" className="max-md:hidden" asChild>
              <Link href="/projects">View all Projects</Link>
            </Button>
          </div>
        </div>
        <Carousel
          opts={{
            align: "center",
            loop: true,
            slidesToScroll: "auto",
          }}
          plugins={[plugin.current]}
        >
          <CarouselContent>
            {ProjectsData.works.slice(0, 5).map((project, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/3 lg:basis-1/4 pl-0 md:ml-8 rounded-md overflow-hidden relative"
              >
                <div className="top-0 left-0 w-full h-full bg-black/30 z-10">
                  <Image
                    src={project.imageUrl}
                    width={486}
                    height={613}
                    alt={project.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

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
        <div className="md:hidden text-center">
          <Button variant="outline" asChild>
            <Link href="/projects">View all Projects</Link>
          </Button>
        </div>
      </Wrapper>
    </section>
  );
};

export default Projects;
