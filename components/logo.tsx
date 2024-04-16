import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="font-semibold text-foreground capitalize tracking-tight md:text-lg"
    >
      Brochure<span className="italic">Ware</span>
    </Link>
  );
};

export default Logo;
