import Link from "next/link";
import { SlideRightTransition, SlideUpTransition } from "./slide-transitions";
import { Button } from "./ui/button";
import Wrapper from "./wrapper";

export const CTA = () => {
  return (
    <div className="bg-[url('../public/images/abstract-design-light.svg')] dark:bg-[url('../public/images/abstract-design-dark.svg')] bg-no-repeat bg-[left_bottom_-6rem] py-10 border-y border-secondaryFg">
      <Wrapper className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-2xl lg:max-w-3xl space-y-3 max-md:text-center">
          <SlideRightTransition>
            <h2 className="text-headerFg md:text-2xl lg:text-3xl font-semibold">
              Embark on Your Tech Journey Today
            </h2>
          </SlideRightTransition>
          <SlideRightTransition custom={2}>
            <p className="text-[0.9rem]">
              Your next software solution is just a click away. Whether you're
              looking to build a custom app, explore strategic outsourcing
              opportunities, or need expert advice, we're here to guide you
              through every step. Start your journey by discovering our services
              or reach out to our team for personalized support.
            </p>
          </SlideRightTransition>
        </div>
        <SlideUpTransition className="w-full text-end">
          <Button variant="secondary" className="max-md:w-full px-8" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </SlideUpTransition>
      </Wrapper>
    </div>
  );
};
