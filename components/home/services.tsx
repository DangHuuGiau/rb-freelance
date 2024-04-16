import SectionTag from "@/components/section-tag";
import Wrapper from "@/components/wrapper";
import { ServicesData } from "@/data/home/services";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { SlideRightTransition, SlideUpTransition } from "../slide-transitions";

const Services = () => {
  return (
    <section className="bg-secondaryBg py-16 md:py-28">
      <SectionTag>{ServicesData.tag}</SectionTag>
      <Wrapper className="lg:w-5/6 mx-auto mt-10">
        <SlideUpTransition custom={2} className="mb-10 text-center space-y-3">
          <h2 className="text-2xl font-semibold text-headerFg">Services</h2>
          <p className="text-[0.9rem]">
            Elevate your brand with our cutting-edge digital solutions designed
            to captivate and enthrall your audience.
          </p>
        </SlideUpTransition>
        <ul className="grid grid-cols-1 sm:grid-cols-3 sm:gap-x-10 md:gap-x-16 gap-y-7 mx-auto">
          {ServicesData.serviceList.map((service, idx) => (
            <SlideRightTransition key={idx} custom={idx}>
              <li
                className={cn(
                  "flex flex-col items-center gap-3 py-7 rounded-sm",
                  service.iconUrlDark ? "bg-background" : "bg-primary"
                )}
              >
                <Image
                  src={
                    service.iconUrlDark ? service.iconUrlDark : service.iconUrl
                  }
                  alt={`${service.label} icon`}
                  width={40}
                  height={40}
                  className="h-10 w-10"
                />
                <span className="w-16 h-[2px] bg-gray-300/55 inline-block"></span>
                <p
                  className={cn(
                    "capitalize font-medium",
                    service.iconUrlDark ? "text-primary" : "text-white"
                  )}
                >
                  {service.label}
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
