import SectionTag from "@/components/section-tag";
import { Button } from "@/components/ui/button";
import Wrapper from "@/components/wrapper";
import { AboutUsData } from "@/data/home/about-us";
import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
  return (
    <section className="py-10 md:py-28">
      <SectionTag>{AboutUsData.tag}</SectionTag>
      <Wrapper className="flex flex-col-reverse md:flex-row gap-10 mt-16 relative items-center">
        <div className="relative flex-1">
          <div className="w-full rounded-sm overflow-hidden">
            <Image
              src={AboutUsData.mainImageUrl}
              width={640}
              height={498}
              alt="workers"
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex-1 h-full relative after:absolute after:bg-primary after:top-0 after:bottom-0 after:right-0 after:w-1 after:-z-10 after:bg-blend-difference pr-3">
          <h2 className="text-3xl lg:text-4xl font-semibold mb-6 text-headerFg">
            {AboutUsData.title}
          </h2>
          <ul className="flex flex-col gap-3 text-bodyFg mb-6">
            {AboutUsData.body.map((item, index) => (
              <li
                key={index}
                className="text-sm sm:text-base md:text-sm lg:text-base"
              >
                {item}
              </li>
            ))}
          </ul>
          <Button asChild>
            <Link href={AboutUsData.cta.path}>{AboutUsData.cta.label}</Link>
          </Button>
        </div>
      </Wrapper>
    </section>
  );
};

export default AboutUs;
