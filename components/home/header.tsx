import Wrapper from "@/components/wrapper";
import { HeaderData } from "@/data/home/header";
import { TypewriterEffect } from "../ui/typewrite-effect";
import { splitString } from "@/lib/utils";
import Image from "next/image";

const Header = ({ t }: { t: (key: string) => string }) => {
  return (
    <header className="h-screen md:h-[85vh] z-10 relative bg-hero-bg bg-cover bg-no-repeat bg-center before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-b before:from-white/50 before:to-white/40 dark:before:from-[#222222] dark:before:to-[#222222]/50 before:opacity-100 before:z-[-5]">
      <Wrapper className="h-full flex items-center">
        <div className="w-3/4 md:w-2/3 lg:w-1/2 text-center lg:text-left space-y-3">
          <TypewriterEffect
            words={splitString(t("banner.tag"))}
            className="text-5xl sm:text-6xl text-headerFg font-semibold"
            cursorClassName="hidden"
          />
          <p>{t("banner.title")}</p>
          <div className="flex items-center justify-center lg:justify-start gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
              {t("banner.button")}
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="hidden md:flex md:w-1/2 justify-center relative">
          <div className="relative w-[350px] h-[350px] rounded-[60px] overflow-hidden shadow-lg rotate-45">
            <Image
              src="/images/home/header/banner.png"
              alt="Team"
              fill
              className="-rotate-45 object-cover"
            />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -right-4 top-20 w-6 h-6 bg-white rounded-full shadow-lg"></div>
          <div className="absolute left-0 bottom-10 w-24 h-24 bg-blue-600 rounded-full opacity-80"></div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
