import Wrapper from "@/components/wrapper";
import { SlideUpTransition } from "../slide-transitions";

const ContactHeader = () => {
  return (
    <header className="py-12">
      <Wrapper className="h-full w-full flex flex-col items-center justify-center text-center gap-8 md:gap-10">
        <SlideUpTransition>
          <h4 className="text-secondary uppercase text-sm font-semibold">
            Contact us
          </h4>
        </SlideUpTransition>
        <div className="w-11/12 md:w-5/6 lg:w-2/3 mx-auto space-y-5 md:space-y-6">
          <SlideUpTransition>
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-headerFg font-medium lg:leading-[3.5rem]">
              Reach out to RB Freelance
            </h1>
          </SlideUpTransition>
          <SlideUpTransition custom={2}>
            <p className="text-sm md:text-base text-bodyFg">
              Thank you for visiting our Contact Us page. Whether you have a
              question, feedback, or need assistance with a project, we&apos;re
              here to help. Our team is always available to discuss your needs
              and explore ways to collaborate. Don&apos;t hesitate to reach out
              — let&apos;s start a conversation today!
            </p>
          </SlideUpTransition>
        </div>
      </Wrapper>
    </header>
  );
};

export default ContactHeader;
