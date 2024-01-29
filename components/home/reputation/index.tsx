import SectionTag from "@/components/section-tag";
import Wrapper from "@/components/wrapper";
import { ReputationData } from "@/data/home/reputation";
import Image from "next/image";

const Reputation = () => {
  return (
    <Wrapper className="py-12 md:py-16">
      <SectionTag>{ReputationData.tag}</SectionTag>
      <div className="mt-10">
        <h2 className="text-center text-2xl font-semibold text-headerFg mb-8">
          {ReputationData.title}
        </h2>
        <ul className="flex flex-col md:flex-row gap-7 md:gap-5 items-center justify-center">
          {ReputationData.reasons.map((item) => (
            <li
              key={item.title}
              className="flex flex-col gap-2 items-center justify-center border border-muted dark:border-card h-44 px-3 w-full sm:w-72 text-center rounded-sm bg-card"
            >
              <Image
                src={item.iconUrl}
                alt={item.title}
                width={40}
                height={40}
                className="w-10 h-10 mx-auto"
              />
              <h3 className="text-lg font-semibold text-headerFg">
                {item.title}
              </h3>
              <p className="text-bodyFg text-sm">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
};

export default Reputation;
