import { CoreValuesData } from "@/data/about-us/core-values";
import Wrapper from "../wrapper";
import SectionTag from "../section-tag";
import { cn } from "@/lib/utils";
import { SlideRightTransition, SlideUpTransition } from "../slide-transitions";

const achievements = [
  {
    title: "3+ Years of Excellence",
    description:
      "With over 3 years in the industry, we've amassed a wealth of knowledge and experience, becoming a go-to resource for all things real estate.",
  },
  {
    title: "Happy Clients",
    description:
      "Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do.",
  },
  {
    title: "Industry Recognition",
    description:
      "We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence.",
  },
];

const OurAchievements = () => {
  return (
    <section className="py-10 md:py-28">
      <SectionTag>--- our noteworthy accomplishments ---</SectionTag>
      <Wrapper>
        <div className="text-center sm:w-5/6 lg:w-2/3 mx-auto my-10">
          <SlideUpTransition>
            <h2 className="text-headerFg font-semibold text-2xl md:text-3xl mb-4 md:mb-6">
              Our Achievements
            </h2>
          </SlideUpTransition>
          <SlideUpTransition custom={2}>
            <p className="text-bodyFg text-sm md:text-base">
              Discover our proud milestones, reflecting our expertise,
              innovation, and success in the construction industry.
            </p>
          </SlideUpTransition>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center align-middle gap-8">
          {achievements.map((item, idx) => (
            <SlideRightTransition custom={idx} key={idx} className="h-full">
              <li
                className={cn(
                  "rounded px-8 py-6 h-full  shadow border-[6px] border-secondaryBg space-y-4"
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
