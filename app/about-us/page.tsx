import CoreValues from "@/components/about-us/core-values";
import Header from "@/components/about-us/header";
import MeetTheTeam from "@/components/about-us/meet-the-team";
import OurHistory from "@/components/about-us/our-history";

export default function About() {
  return (
    <main>
      <Header />
      <OurHistory />
      <CoreValues />
      {/* <MeetTheTeam /> */}
    </main>
  );
}
