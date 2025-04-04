import { CoreValuesData } from "@/data/about-us/core-values";
import Wrapper from "../wrapper";
import SectionTag from "../section-tag";
import { cn } from "@/lib/utils";
import { SlideRightTransition, SlideUpTransition } from "../slide-transitions";

const achievements = [
  {
    title: "Kickstarting Our Journey",
    description:
      "Though we&apos;re a new team, we’re committed to bringing fresh perspectives and innovative solutions to the software development world.",
  },
  {
    title: "Building Trust with Our Clients",
    description:
      "We may be new, but we’re dedicated to establishing strong, trustworthy relationships with every client, ensuring that their vision is brought to life with precision and care.",
  },
  {
    title: "Innovating and Growing",
    description:
      "We’re constantly learning and adapting, with a passion for technology that drives us to innovate and develop cutting-edge solutions for every project.",
  },
];

const OurAchievements = () => {
  return (
    <section className="py-10 md:py-28">
      <SectionTag>--- our milestones and growth ---</SectionTag>
      <Wrapper>
        <div className="text-center sm:w-5/6 lg:w-2/3 mx-auto my-10">
          <SlideUpTransition>
            <h2 className="text-headerFg font-semibold text-2xl md:text-3xl mb-4 md:mb-6">
              Our Achievements
            </h2>
          </SlideUpTransition>
          <SlideUpTransition custom={2}>
            <p className="text-bodyFg text-sm md:text-base">
              While we’re just starting out, we’re proud of the milestones we’ve
              achieved in such a short time. Our growth reflects our dedication
              and passion for delivering quality software solutions.
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
