import BookOpenIcon from "@/components/icons/book-open";
import BulbIcon from "@/components/icons/bulb";
import HeartIcon from "@/components/icons/heart";
import StarSmileIcon from "@/components/icons/star-smile";
import SunIcon from "@/components/icons/sun";
import TeamIcon from "@/components/icons/team";

type IconComponent = React.FC;

type CoreValuesType = {
  tag: string;
  title: string;
  description: string;
  values: {
    icon: IconComponent;
    title: string;
    description: string;
  }[];
};

export const CoreValuesData = {
  tag: "--- Our Core Principles ---",
  title: "Our Core Values",
  description:
    "We strive to deliver cutting-edge software solutions with a focus on collaboration, innovation, and continuous growth. Our core values guide every project we take on and influence the impact we create for our clients.",
  values: [
    {
      icon: <TeamIcon className="w-6 h-6" fillColor="#2947A8" />,
      title: "Collaborative Excellence",
      description:
        "We believe that the best solutions come from working closely with our clients, understanding their needs, and building together.",
    },
    {
      icon: <StarSmileIcon className="w-6 h-6" fillColor="#2947A8" />,
      title: "Innovation at Heart",
      description:
        "We embrace new technologies and creative problem-solving to build innovative, future-proof software solutions.",
    },
    {
      icon: <SunIcon className="w-6 h-6" fillColor="#2947A8" />,
      title: "Accountability & Integrity",
      description:
        "We take full responsibility for our work and believe in delivering on our promises with honesty and transparency.",
    },
    {
      icon: <BulbIcon className="w-6 h-6" fillColor="#2947A8" />,
      title: "Passion for Learning",
      description:
        "We are constantly evolving, always eager to learn, and committed to staying ahead of the curve with the latest in software development.",
    },
    {
      icon: <BookOpenIcon className="w-6 h-6" fillColor="#2947A8" />,
      title: "Empathy & Growth",
      description:
        "We value personal and professional growth, striving to create an environment where everyone can develop their skills and achieve their potential.",
    },
    {
      icon: <HeartIcon className="w-6 h-6" fillColor="#2947A8" />,
      title: "Positive Impact",
      description:
        "We are committed to fostering a supportive and positive work culture that celebrates achievements and promotes well-being.",
    },
  ],
};
