import { AboutUsHeaderData } from "@/data/about-us/header";
import Wrapper from "@/components/wrapper";
import { SlideUpTransition } from "../slide-transitions";

const Header = () => {
  return (
    <header className="py-12">
      <Wrapper className="h-full w-full flex flex-col items-center justify-center text-center gap-8 md:gap-10">
        <SlideUpTransition>
          <h4 className="text-secondary uppercase text-sm font-semibold">
            {AboutUsHeaderData.tag}
          </h4>
        </SlideUpTransition>
        <div className="w-11/12 md:w-5/6 lg:w-2/3 mx-auto space-y-5 md:space-y-6">
          <SlideUpTransition>
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-headerFg font-medium lg:leading-[3.5rem]">
              {AboutUsHeaderData.title}
            </h1>
          </SlideUpTransition>
          <SlideUpTransition custom={2}>
            <p className="text-sm md:text-base text-bodyFg">
              {AboutUsHeaderData.description}
            </p>
          </SlideUpTransition>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
