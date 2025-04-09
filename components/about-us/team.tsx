import Image from "next/image";
import Wrapper from "../wrapper";
import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { SlideUpTransition } from "../slide-transitions";

const TeamData = [
  {
    name: "Phu Quoc",
    role: "Team Lead",
    image: "/images/member1.webp",
    socials: {
      instagram: "https://instagram.com/phuquoc.dev",
      twitter: "https://twitter.com/phuquoc.dev",
      linkedin: "https://linkedin.com/in/phuquoc.dev",
    },
  },
  {
    name: "Giau Dang",
    role: "Fullstack Developer",
    image: "/images/member2.webp",
    socials: {
      instagram: "https://instagram.com/giaudang.dev",
      twitter: "https://twitter.com/giaudang.dev",
      linkedin: "https://linkedin.com/in/giaudang.dev",
    },
  },
  {
    name: "Thanh Phuong",
    role: "Fullstack Developer",
    image: "/images/member3.webp",
    socials: {
      instagram: "https://instagram.com/thanhphuong.dev",
      twitter: "https://twitter.com/thanhphuong.dev",
      linkedin: "https://linkedin.com/in/thanhphuong.dev",
    },
  },
  {
    name: "Thanh Tai",
    role: "UX/ UI Designer",
    image: "/images/member4.webp",
    socials: {
      instagram: "https://instagram.com/thanhtai.dev",
      twitter: "https://twitter.com/thanhtai.dev",
      linkedin: "https://linkedin.com/in/thanhtai.dev",
    },
  },
  {
    name: "Quy Ngoc",
    role: "BA / Tester",
    image: "/images/member5.webp",
    socials: {
      instagram: "https://instagram.com/quyngoc.dev",
      twitter: "https://twitter.com/quyngoc.dev",
      linkedin: "https://linkedin.com/in/quyngoc.dev",
    },
  },
  {
    name: "Kim Ngan",
    role: "QA / Tester / Support",
    image: "/images/member6.webp",
    socials: {
      instagram: "https://instagram.com/kimngan.dev",
      twitter: "https://twitter.com/kimngan.dev",
      linkedin: "https://linkedin.com/in/kimngan.dev",
    },
  },
];

export const Team = ({ t }: { t: (key: string) => string }) => {
  return (
    <section className="py-12">
      <Wrapper className="space-y-10">
        <h2 className="text-2xl font-bold max-md:text-center">
          {t("team.tag")}
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
