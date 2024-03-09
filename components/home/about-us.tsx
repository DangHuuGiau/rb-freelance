import SectionTag from "@/components/section-tag";
import { Button } from "@/components/ui/button";
import Wrapper from "@/components/wrapper";
import { AboutUsData } from "@/data/home/about-us";
import Image from "next/image";
import Link from "next/link";
import { SlideRightTransition, SlideUpTransition } from "../slide-transitions";

const AboutUs = () => {
  return (
    <section className="py-10 md:py-28">
      <SectionTag>{AboutUsData.tag}</SectionTag>
      <Wrapper className="flex flex-col-reverse md:flex-row gap-10 mt-16 relative items-center">
        <SlideRightTransition
          viewport={{ amount: 0.2 }}
          className="relative flex-1"
        >
          <div className="w-full rounded-sm overflow-hidden">
            <Image
              src={AboutUsData.mainImageUrl}
              width={640}
              height={498}
              alt="workers"
              className="object-cover"
            />
          </div>
        </SlideRightTransition>
        <SlideUpTransition className="flex-1 h-full relative after:absolute after:bg-primary after:top-0 after:bottom-0 after:right-0 after:w-1 after:-z-10 after:bg-blend-difference pr-3">
          <SlideUpTransition>
            <h2 className="text-3xl lg:text-4xl font-semibold mb-6 text-headerFg relative">
              {AboutUsData.title}
            </h2>
          </SlideUpTransition>
          <ul className="flex flex-col gap-3 text-bodyFg mb-6">
            {AboutUsData.body.map((item, index) => (
              <SlideUpTransition custom={index} key={index}>
                <li className="text-sm sm:text-base md:text-sm lg:text-base">
                  {item}
                </li>
              </SlideUpTransition>
            ))}
          </ul>
          <SlideUpTransition>
            <Button asChild>
              <Link href={AboutUsData.cta.path}>{AboutUsData.cta.label}</Link>
            </Button>
          </SlideUpTransition>
        </SlideUpTransition>
      </Wrapper>
    </section>
  );
};

export default AboutUs;
