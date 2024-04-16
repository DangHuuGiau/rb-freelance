import Image from "next/image";
import Wrapper from "../wrapper";
import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { SlideRightTransition, SlideUpTransition } from "../slide-transitions";

const TeamData = [
  {
    name: "Ridwan Taiwo",
    role: "Co-Founder",
    image: "/images/ridwan-taiwo.jpg",
    socials: {
      instagram: "https://instagram.com/ridwntaiwo",
      twitter: "https://twitter.com/ridwntaiwo",
      linkedin: "https://linkedin.com/in/ridwntaiwo",
    },
  },
  {
    name: "Azeezat Taiwo",
    role: "Co-Founder",
    image: "/images/azeezat-taiwo.jpg",
    socials: {
      instagram: "https://instagram.com/azeezattaiwo",
      twitter: "https://twitter.com/azeezattaiwo",
      linkedin: "https://linkedin.com/in/azeezattaiwo",
    },
  },
  {
    name: "Bukola Taiwo",
    role: "Director of people",
    image: "/images/bukola-taiwo.jpg",
    socials: {
      instagram: "https://instagram.com/bukolataiwo",
      twitter: "https://twitter.com/bukolataiwo",
      linkedin: "https://linkedin.com/in/bukolataiwo",
    },
  },
  {
    name: "Samiat Khan",
    role: "Director of Finance",
    image: "/images/samiat-khan.jpg",
    socials: {
      instagram: "https://instagram.com/boluwatife",
      twitter: "https://twitter.com/boluwatife",
      linkedin: "https://linkedin.com/in/boluwatife",
    },
  },
  {
    name: "Rene Strong",
    role: "Head of marketing",
    image: "/images/rene-strong.jpg",
    socials: {
      instagram: "https://instagram.com/rene",
      twitter: "https://twitter.com/rene",
      linkedin: "https://linkedin.com/in/rene",
    },
  },
  {
    name: "Cisneros Edward",
    role: "Human resources",
    image: "/images/cisneros-edward.jpg",
    socials: {
      instagram: "https://instagram.com/cisneros",
      twitter: "https://twitter.com/cisneros",
      linkedin: "https://linkedin.com/in/cisneros",
    },
  },
  {
    name: "Ayo  Ogunseinde",
    role: "IT Manager",
    image: "/images/ayo-ogunseinde.jpg",
    socials: {
      instagram: "https://instagram.com/ayoogunseinde",
      twitter: "https://twitter.com/ayoogunseinde",
      linkedin: "https://linkedin.com/in/ayoogunseinde",
    },
  },
  {
    name: "aiony haust",
    role: "Designer",
    image: "/images/aiony-haust.jpg",
    socials: {
      instagram: "https://instagram.com/aiony",
      twitter: "https://twitter.com/aiony",
      linkedin: "https://linkedin.com/in/aiony",
    },
  },
];

export const Team = () => {
  return (
    <section className="py-12">
      <Wrapper className="space-y-10">
        <h2 className="text-2xl font-bold max-md:text-center">
          Meet our amazing team
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 place-items-center">
          {TeamData.map((member, idx) => (
            <SlideUpTransition custom={idx} key={idx} className="">
              <TeamCard
                imageSrc={member.image}
                name={member.name}
                role={member.role}
                socials={member.socials}
              />
            </SlideUpTransition>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

/**
 * Renders a card for a team member.
 */
const TeamCard = ({
  imageSrc,
  name,
  role,
  socials,
}: {
  imageSrc: string;
  name: string;
  role: string;
  socials: {
    instagram: string;
    twitter: string;
    linkedin: string;
  };
}) => {
  return (
    <div className="grid grid-cols-1 gap-y-4 place-items-center text-center p-4 border w-fit rounded-md">
      <div className="w-40 h-40">
        <Image
          src={imageSrc}
          alt="Team member"
          width={160}
          height={160}
          className="rounded-md h-full w-full object-cover border "
        />
      </div>
      <div className="grid grid-cols-1 gap-y-3">
        <div>
          <h3 className="font-semibold text-headerFg">{name}</h3>
          <p className="text-sm">{role}</p>
        </div>
        <div className="flex gap-3 mx-auto">
          <a href={socials.instagram}>
            <InstagramLogoIcon className="h-[1.1rem] w-[1.1rem]" />
          </a>
          <a href={socials.twitter}>
            <TwitterLogoIcon className="h-[1.1rem] w-[1.1rem]" />
          </a>
          <a href={socials.linkedin}>
            <LinkedInLogoIcon className="h-[1.1rem] w-[1.1rem]" />
          </a>
        </div>
      </div>
    </div>
  );
};
