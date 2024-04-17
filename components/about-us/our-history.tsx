import Wrapper from "@/components/wrapper";
import { OurHistoryData } from "@/data/about-us/our-history";
import Image from "next/image";
import SectionTag from "../section-tag";
import { SlideUpTransition } from "../slide-transitions";

const OurHistory = () => {
  return (
    <section className="py-10 md:py-16">
      <SectionTag>{OurHistoryData.tag}</SectionTag>
      <Wrapper className="flex flex-col-reverse md:flex-row gap-10 relative items-center mt-14">
        <SlideUpTransition className="flex flex-1 flex-col gap-5 h-full relative after:absolute after:bg-primary after:top-0 after:bottom-0 after:left-0 after:w-1 after:-z-10 after:bg-blend-difference pl-3">
          {OurHistoryData.paragraphs.map((line, idx) => (
            <SlideUpTransition custom={idx} key={idx}>
              <p className="text-[0.9rem] text-bodyFg">{line}</p>
            </SlideUpTransition>
          ))}
        </SlideUpTransition>
        <SlideUpTransition className="relative flex-1">
          <div className="w-full rounded-sm overflow-hidden">
            <Image
              src={OurHistoryData.mainImageUrl}
              width={640}
              height={498}
              alt="workers"
              className="object-contain"
            />
          </div>
        </SlideUpTransition>
      </Wrapper>
    </section>
  );
};

export default OurHistory;
