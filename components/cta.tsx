import Link from "next/link";
import { SlideRightTransition, SlideUpTransition } from "./slide-transitions";
import { Button } from "./ui/button";
import Wrapper from "./wrapper";

export const CTA = ({ t }: { t: (key: string) => string }) => {
  return (
    <div className="bg-[url('../public/images/abstract-design-light.svg')] dark:bg-[url('../public/images/abstract-design-dark.svg')] bg-no-repeat bg-[left_bottom_-6rem] py-10 border-y border-secondaryFg">
      <Wrapper className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-2xl lg:max-w-3xl space-y-3 max-md:text-center">
          <SlideRightTransition>
            <h2 className="text-headerFg md:text-2xl lg:text-3xl font-semibold">
              {t("contactUs.tag")}
            </h2>
          </SlideRightTransition>
          <SlideRightTransition custom={2}>
            <p className="text-[0.9rem]">{t("contactUs.description")}</p>
          </SlideRightTransition>
        </div>
        <SlideUpTransition className="w-full text-end">
          <Button variant="secondary" className="max-md:w-full px-8" asChild>
            <Link href={t("contactUs.cta.path")}>
              {t("contactUs.cta.label")}
            </Link>
          </Button>
        </SlideUpTransition>
      </Wrapper>
    </div>
  );
};
