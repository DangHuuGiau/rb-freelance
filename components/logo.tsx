import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="font-semibold text-foreground capitalize tracking-tight md:text-lg"
    >
      RB<span className="italic text-sm">Freelance</span>
    </Link>
  );
};

export default Logo;
