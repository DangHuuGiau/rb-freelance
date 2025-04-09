import SectionTag from "@/components/section-tag";
import Wrapper from "@/components/wrapper";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { SlideRightTransition, SlideUpTransition } from "../slide-transitions";

const Services = ({ t }: { t: (key: string) => string }) => {
  return (
    <section className="bg-secondaryBg py-16 md:py-28">
      <SectionTag>{t("services.tag")}</SectionTag>
      <Wrapper className="lg:w-5/6 mx-auto mt-10">
        <SlideUpTransition custom={2} className="mb-10 text-center space-y-3">
          <h2 className="text-2xl font-semibold text-headerFg">
            {t("services.title")}
          </h2>
          <p className="text-[0.9rem]">{t("services.description")}</p>
        </SlideUpTransition>
        <ul className="grid grid-cols-1 sm:grid-cols-3 sm:gap-x-10 md:gap-x-16 gap-y-7 mx-auto">
          {Array.from({ length: 6 }).map((_, i) => (
            <SlideRightTransition key={i} custom={i}>
              <li
                className={cn(
                  "flex flex-col items-center gap-3 py-7 rounded-sm",
                  t(`services.serviceList.${i}.iconUrlDark`)
                    ? "bg-background"
                    : "bg-primary"
                )}
              >
                <Image
                  src={
                    t(`services.serviceList.${i}.iconUrlDark`)
                      ? t(`services.serviceList.${i}.iconUrlDark`)
                      : t(`services.serviceList.${i}.iconUrl`)
                  }
                  alt={`${t(`services.serviceList.${i}.label`)} icon`}
                  width={40}
                  height={40}
                  className="h-10 w-10"
                />
                <span className="w-16 h-[2px] bg-gray-300/55 inline-block"></span>
                <p
                  className={cn(
                    "capitalize font-medium",
                    t(`services.serviceList.${i}.iconUrlDark`)
                      ? "text-primary"
                      : "text-white"
                  )}
                >
                  {t(`services.serviceList.${i}.label`)}
                </p>
              </li>
            </SlideRightTransition>
          ))}
        </ul>
      </Wrapper>
    </section>
  );
};

export default Services;
