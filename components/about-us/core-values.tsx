
import { CoreValuesData } from "@/data/about-us/core-values";
import Wrapper from "../wrapper";
import SectionTag from "../section-tag";
import { cn } from "@/lib/utils";
import { SlideRightTransition, SlideUpTransition } from "../slide-transitions";

const CoreValues = () => {
  return (
    <section className="bg-secondaryBg py-10 md:py-28">
      <SectionTag>{CoreValuesData.tag}</SectionTag>
      <Wrapper>
        <div className="text-center sm:w-5/6 lg:w-2/3 mx-auto my-10">
          <SlideUpTransition>
            <h2 className="text-headerFg font-semibold text-2xl md:text-3xl mb-4 md:mb-6">
              {CoreValuesData.title}
            </h2>
          </SlideUpTransition>
          <SlideUpTransition custom={2}>
            <p className="text-bodyFg text-sm md:text-base">
              {CoreValuesData.description}
            </p>
          </SlideUpTransition>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center align-middle gap-8">
          {CoreValuesData.values.map((item, idx) => (
            <SlideRightTransition custom={idx} key={idx}>
              <li
                className={cn(
                  "rounded-lg flex flex-col items-center justify-center text-center px-8 py-8 h-full w-full bg-background"
                )}
              >
                {item.icon}
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-headerFg whitespace-nowrap mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-bodyFg">{item.description}</p>
                </div>
              </li>
            </SlideRightTransition>
          ))}
        </ul>
      </Wrapper>
    </section>
  );
};

export default CoreValues;
