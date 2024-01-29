import Logo from "../logo";
import Wrapper from "../wrapper";
import DesktopMenu from "./desktop-menu";
import Hamburger from "./hamburger";
import MobileMenu from "./mobile-menu";

const Navbar = () => {
  return (
    <nav className="h-14 md:h-16 flex items-center fixed w-full bg-background md:bg-transparent md:backdrop-blur-md z-30 shadow-sm">
      <Wrapper className="flex justify-between w-full items-center">
        <Logo />
        <Hamburger />
        <DesktopMenu />
        <MobileMenu />
      </Wrapper>
    </nav>
  );
};

export default Navbar;
