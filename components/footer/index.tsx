import { FooterData } from "@/data/footer";
import Wrapper from "../wrapper";
import Logo from "../logo";
import {
  TiSocialLinkedin,
  TiSocialFacebook,
  TiSocialTwitter,
} from "react-icons/ti";

const Footer = () => {
  return (
    <footer className="py-12">
      <Wrapper className="flex flex-col md:flex-row items-center gap-7 md:gap-0 justify-between">
        <div className="flex flex-col gap-4 text-sm text-center md:text-start">
          <p className="capitalize">
            <span className="uppercase font-medium text-primary mr-3">
              Address:
            </span>{" "}
            {FooterData.address}
          </p>
          <p className="capitalize">
            <span className="uppercase font-medium text-primary mr-3">
              phone:
            </span>{" "}
            {FooterData.phone}
          </p>
          <p className="capitalize">
            <span className="uppercase font-medium text-primary mr-3">
              email:
            </span>{" "}
            {FooterData.email}
          </p>
          <Logo />
        </div>
        <div className="flex flex-col justify-between">
          {/* <div>
            <p>Newsletter:</p>
          </div> */}
          <div className="text-center md:text-start">
            <span className="uppercase font-medium text-primary text-sm">
              Socials:
            </span>
            <ul className="flex gap-3 mt-2">
              {FooterData.socials.map((item, index) => (
                <li key={index} className="">
                  <a
                    href={item.link}
                    className="inline-flex h-8 w-8 bg-bodyFg rounded-full items-center justify-center"
                  >
                    {item.label === "linkedin" && (
                      <TiSocialLinkedin className="h-6 w-6 text-background" />
                    )}
                    {item.label === "facebook" && (
                      <TiSocialFacebook className="h-6 w-6 text-background" />
                    )}
                    {item.label === "twitter" && (
                      <TiSocialTwitter className="h-6 w-6 text-background" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
