"use client";

import SectionTag from "@/components/section-tag";
import Wrapper from "@/components/wrapper";
import { TestimonialsData } from "@/data/home/testimonials";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SlideUpTransition } from "../slide-transitions";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const Testimonials = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2500, stopOnInteraction: false, stopOnMouseEnter: true })
  );
  return (
    <section className="py-16">
      <SectionTag>{TestimonialsData.tag}</SectionTag>
      <Wrapper className="mt-10">
        <SlideUpTransition custom={2} className="mb-10 text-center space-y-3">
          <h2 className="text-2xl font-semibold text-headerFg">
            What our Clients say About us
          </h2>
          <p className="text-[0.9rem]">
            At RB Freelance, we&apos;re dedicated to delivering exceptional
            construction projects and services that drive success for our
            clients. Here&apos;s what some of our satisfied clients have to say
            about their experience working with us.
          </p>
        </SlideUpTransition>
        <div className="h-[20rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards items={TestimonialsData.reviews} speed="slow" />
        </div>
        {/* <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          plugins={[plugin.current]}
          className="mx-auto w-full"
        >
          <CarouselContent className="">
            {TestimonialsData.reviews.map((review) => (
              <CarouselItem
                key={review.id}
                className="text-center flex items-center basis-1/2 h-max"
              >
                <div className="p-8 mx-auto bg-primary shadow-lg text-white rounded-md">
                  <p className="text-[0.8rem] mb-2">{review.comment}</p>
                  <h5 className="text-xs font-semibold">{review.name}</h5>
                  <h6 className="text-[0.7rem] mb-3">{review.role}</h6>
                  <Avatar className="mx-auto h-8 w-8">
                    <AvatarImage src={"https://github.com/shadcn.png"} />
                    <AvatarFallback className="text-primary">LT</AvatarFallback>
                  </Avatar>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel> */}
      </Wrapper>
    </section>
  );
};

export default Testimonials;
