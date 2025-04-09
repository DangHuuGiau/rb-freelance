import Wrapper from "@/components/wrapper";
import Image from "next/image";
import SectionTag from "../section-tag";
import { SlideUpTransition } from "../slide-transitions";

const OurHistory = ({ t }: { t: (key: string) => string }) => {
  return (
    <section className="py-10 md:py-16">
      <SectionTag>{t("ourHistory.tag")}</SectionTag>
      <Wrapper className="flex flex-col-reverse md:flex-row gap-10 relative items-center mt-14">
        <SlideUpTransition className="flex flex-1 flex-col gap-5 h-full relative after:absolute after:bg-primary after:top-0 after:bottom-0 after:left-0 after:w-1 after:-z-10 after:bg-blend-difference pl-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <SlideUpTransition custom={i} key={i}>
              <p className="text-[0.9rem] text-bodyFg">
                {t(`ourHistory.paragraphs.${i}`)}
              </p>
            </SlideUpTransition>
          ))}
        </SlideUpTransition>
        <SlideUpTransition className="relative flex-1">
          <div className="w-full rounded-sm overflow-hidden">
            <Image
              src={t("ourHistory.mainImageUrl")}
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
