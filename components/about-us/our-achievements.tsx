import Wrapper from "../wrapper";
import SectionTag from "../section-tag";
import { cn } from "@/lib/utils";
import { SlideRightTransition, SlideUpTransition } from "../slide-transitions";

const OurAchievements = ({ t }: { t: (key: string) => string }) => {
  const achievements = Array.from({ length: 3 }).map((_, i) => ({
    title: t(`ourAchievements.achievements.${i}.title`),
    description: t(`ourAchievements.achievements.${i}.description`),
  }));
  return (
    <section className="py-10 md:py-28">
      <SectionTag>{t("ourAchievements.tag")}</SectionTag>
      <Wrapper>
        <div className="text-center sm:w-5/6 lg:w-2/3 mx-auto my-10">
          <SlideUpTransition>
            <h2 className="text-headerFg font-semibold text-2xl md:text-3xl mb-4 md:mb-6">
              {t("ourAchievements.title")}
            </h2>
          </SlideUpTransition>
          <SlideUpTransition custom={2}>
            <p className="text-bodyFg text-sm md:text-base">
              {t("ourAchievements.description")}
            </p>
          </SlideUpTransition>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center align-middle gap-8">
          {achievements.map((item, idx) => (
            <SlideRightTransition custom={idx} key={idx} className="h-full">
              <li
                className={cn(
                  "rounded px-8 py-6 h-full shadow border-[6px] border-secondaryBg space-y-4"
                )}
              >
                <h3 className="text-lg font-medium text-headerFg whitespace-nowrap mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-bodyFg">{item.description}</p>
              </li>
            </SlideRightTransition>
          ))}
        </ul>
      </Wrapper>
    </section>
  );
};

export default OurAchievements;
