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

const Testimonials = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2500, stopOnInteraction: false, stopOnMouseEnter: true })
  );
  return (
    <section className="py-16">
      <SectionTag>{TestimonialsData.tag}</SectionTag>
      <Wrapper className="mt-10">
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          plugins={[plugin.current]}
          className=" mx-auto"
          // onMouseEnter={plugin.current.stop}
          // onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {TestimonialsData.reviews.map((review) => (
              <CarouselItem
                key={review.id}
                className="text-center flex items-center"
              >
                <div className="h-fit w-full sm:w-96 lg:w-1/2 p-8 mx-auto bg-primary shadow-lg text-white rounded-md">
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
          {/* <CarouselPrevious /> */}
          {/* <CarouselNext /> */}
        </Carousel>
      </Wrapper>
    </section>
  );
};

export default Testimonials;
