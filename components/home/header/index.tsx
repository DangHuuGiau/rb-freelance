import Wrapper from "@/components/wrapper";
import { HeaderData } from "@/data/home/header";

const Header = () => {
  return (
    <header className="h-screen md:h-[85vh] z-10 relative bg-hero-bg bg-cover bg-no-repeat bg-center before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-b before:from-white/50 before:to-white/40 dark:before:from-[#222222] dark:before:to-[#222222]/50 before:opacity-100 before:z-[-5]">
      <Wrapper className="h-full flex items-center">
        <div className="w-3/4 md:w-2/3 lg:w-1/2">
          <h1 className="text-5xl sm:text-6xl text-headerFg font-semibold">
            {HeaderData.title}
          </h1>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
// bg-[linear-gradient(to_right_bottom,rgba(49,84,44,0.8),rgba(16,71,52,0.8)),url('../public/images/home/header-bg.jpg')]
