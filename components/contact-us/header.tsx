import Wrapper from "@/components/wrapper";
import { SlideUpTransition } from "../slide-transitions";

const ContactHeader = () => {
  return (
    <header className="h-[70vh] md:h-[65vh]">
      <Wrapper className="h-full w-full flex flex-col items-center justify-center text-center gap-8 md:gap-10">
        <SlideUpTransition>
          <h4 className="text-secondary uppercase text-sm font-semibold">
            Contact Us
          </h4>
        </SlideUpTransition>
        <div className="w-11/12 md:w-5/6 lg:w-2/3 mx-auto">
          <SlideUpTransition>
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-5 md:mb-8 text-headerFg font-medium lg:leading-[3.5rem]">
              Reach out to Brochureware
            </h1>
          </SlideUpTransition>
          <SlideUpTransition custom={2}>
            <p className="text-sm md:text-base text-bodyFg">
              Welcome to Brochureware&apos;s Contact Us page. We&apos;re here to
              support you with any inquiries, requests, or feedback you may
              have. Whether you&apos;re planning a construction project,
              exploring investment opportunities, or simply want to connect,
              we&apos;re ready to assist. Send us a message, and let&apos;s
              begin the discussion.
            </p>
          </SlideUpTransition>
        </div>
      </Wrapper>
    </header>
  );
};

export default ContactHeader;
