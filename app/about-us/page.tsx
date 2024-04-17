import CoreValues from "@/components/about-us/core-values";
import Header from "@/components/about-us/header";
import OurAchievements from "@/components/about-us/our-achievements";
import OurHistory from "@/components/about-us/our-history";
import { Team } from "@/components/about-us/team";
import { CTA } from "@/components/cta";

export default function About() {
  return (
    <div className="py-14 md:py-16">
      <Header />
      <OurHistory />
      <CoreValues />
      <OurAchievements />
      <Team />
      <CTA />
    </div>
  );
}
