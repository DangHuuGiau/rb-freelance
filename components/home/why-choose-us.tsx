import SectionTag from "@/components/section-tag";
import Wrapper from "@/components/wrapper";
import Image from "next/image";
import { SlideUpTransition } from "../slide-transitions";
import Link from "next/link";

const WhyChooseUs = ({ t }: { t: (key: string) => string }) => {
  return (
    <section className="mt-12 md:px-24">
      <Wrapper>
        <SectionTag>{t("choose-us.tag")}</SectionTag>
        <div className="mt-10">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
            {/* Image */}
            <div className="w-full md:w-1/2">
              <div className="w-full rounded-sm overflow-hidden">
                <SlideUpTransition amount={0.2} custom={0}>
                  <Image
                    src="/images/home/choose-us/why-choose-us.jpg"
                    alt="Why Choose Us"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-lg w-full h-auto"
                  />
                </SlideUpTransition>
              </div>
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2">
              <SlideUpTransition amount={0.2} custom={1}>
                <h4 className="text-blue-600 font-semibold text-lg mb-2">
                  {t("choose-us.tag")}
                </h4>
              </SlideUpTransition>

              <SlideUpTransition amount={0.2} custom={2}>
                <h2 className="text-4xl font-bold mb-4 leading-tight">
                  {t("choose-us.title")}
                </h2>
              </SlideUpTransition>

              <SlideUpTransition amount={0.2} custom={3}>
                <p className="text-gray-600 mb-6">
                  {t("choose-us.description")}
                </p>
              </SlideUpTransition>

              {/* Icons */}
              <div className="flex gap-6 mb-6">
                <SlideUpTransition amount={0.2} custom={4}>
                  <div className="flex items-center gap-3">
                    <div className="bg-white p-3 rounded-full shadow-md">
                      <Image
                        src="/icons/home/choose-us/pie-chart.png"
                        alt="Globe icon"
                        width={24}
                        height={24}
                      />
                    </div>
                    <p className="font-medium text-gray-800">
                      {t("choose-us.items.0")}
                    </p>
                  </div>
                </SlideUpTransition>
                <SlideUpTransition amount={0.2} custom={5}>
                  <div className="flex items-center gap-3">
                    <div className="bg-white p-3 rounded-full shadow-md">
                      <Image
                        src="/icons/home/choose-us/team.png"
                        alt="Business icon"
                        width={24}
                        height={24}
                      />
                    </div>
                    <p className="font-medium text-gray-800">
                      {t("choose-us.items.1")}
                    </p>
                  </div>
                </SlideUpTransition>
              </div>

              {/* Features List */}
              <div className="grid grid-cols-2 gap-4 mb-8 text-gray-700">
                {Array.from({ length: 6 }).map((_, i) => (
                  <SlideUpTransition amount={0.2} custom={6 + i} key={i}>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-600">✔</span>{" "}
                      {t(`choose-us.items.${i + 2}`)}
                    </div>
                  </SlideUpTransition>
                ))}
              </div>

              {/* Button */}
              <SlideUpTransition amount={0.2} custom={12}>
                <Link href={t("choose-us.cta.path")}>
                  {t("choose-us.cta.label")} →
                </Link>
              </SlideUpTransition>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default WhyChooseUs;
