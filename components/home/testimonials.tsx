import SectionTag from "@/components/section-tag";
import Wrapper from "@/components/wrapper";

import React from "react";
import { SlideUpTransition } from "../slide-transitions";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const Testimonials = ({ t }: { t: (key: string) => string }) => {
  const reviews = [0, 1, 2, 3].map((i) => ({
    name: t(`testimonials.reviews.${i}.name`),
    role: t(`testimonials.reviews.${i}.role`),
    comment: t(`testimonials.reviews.${i}.comment`),
  }));

  return (
    <section className="py-16">
      <SectionTag>{t("testimonials.tag")}</SectionTag>
      <Wrapper className="mt-10">
        <SlideUpTransition custom={2} className="mb-10 text-center space-y-3">
          <h2 className="text-2xl font-semibold text-headerFg">
            {t("testimonials.title")}
          </h2>
          <p className="text-[0.9rem]">{t("testimonials.description")}</p>
        </SlideUpTransition>
        <div className="h-[20rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards items={reviews as any[]} speed="slow" />
        </div>
      </Wrapper>
    </section>
  );
};

export default Testimonials;
