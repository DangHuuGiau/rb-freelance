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
  tag: "--- What we stand for ---",
  title: "Our core values",
  description:
    "It takes great people to make a great product. Our company culture champions diversity and our team members embody Pipedrive's values.",
  values: [
    {
      icon: <TeamIcon className="w-6 h-6" fillColor="#2947A8" />,
      title: "Team first",
      description:
        "Discover how we put our team at the heart and support each other",
    },
    {
      icon: <StarSmileIcon className="w-6 h-6" fillColor="#2947A8" />,
      title: "Reach for greatness",
      description:
        "We are brave and always trying new things to see what we can discover",
    },
    {
      icon: <SunIcon className="w-6 h-6" fillColor="#2947A8" />,
      title: "No excuses",
      description:
        "We take responsibility and understand that where there's a will, there's way",
    },
    {
      icon: <BulbIcon className="w-6 h-6" fillColor="#2947A8" />,
      title: "Internal drive",
      description:
        "We are deeply passionate about our work, and this profound love for what we do",
    },
    {
      icon: <BookOpenIcon className="w-6 h-6" fillColor="#2947A8" />,
      title: "Be ready to learn",
      description:
        "We value open-mindedness, proactivity, and a relentless eagerness to acquire new skills",
    },
    {
      icon: <HeartIcon className="w-6 h-6" fillColor="#2947A8" />,
      title: "Be positive vibes",
      description:
        "We celebrate each other's achivements and always find time to spread the love",
    },
  ],
};
