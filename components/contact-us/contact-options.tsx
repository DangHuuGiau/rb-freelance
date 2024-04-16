import { cn } from "@/lib/utils";
import { MailFill } from "../icons/mail-fill";
import { PhoneFill } from "../icons/phone-fill";
import { WhatsAppFill } from "../icons/whatsapp-fill";
import Wrapper from "../wrapper";
import { ArrowRightIcon, ArrowTopRightIcon } from "@radix-ui/react-icons";
import { SlideUpTransition } from "../slide-transitions";

const ContactOptionsData = [
  {
    title: "Email us",
    icon: <MailFill />,
    description:
      "Ask anything by emailing us and we will reply within 24 hours.",
    href: "#",
    linkLabel: "Send Email",
  },
  {
    title: "Live chat",
    icon: <WhatsAppFill />,
    description:
      "Chat with our team in real-time. We are always here to help you.",
    href: "#",
    linkLabel: "Start Chat",
  },
  {
    title: "Call us any time",
    icon: <PhoneFill />,
    description:
      "Call us anything if your question requires an immediate response.",
    href: "#",
    linkLabel: "+234-234-2348",
  },
];

export const ContactOptions = () => {
  return (
    <Wrapper className="grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 md:grid-cols-3 justify-items-center mb-10">
      {ContactOptionsData.map((item, idx) => (
        <SlideUpTransition
          custom={idx}
          key={idx}
          className="flex flex-col justify-center items-center text-center gap-y-3 max-w-72 bg-secondaryBg p-5 rounded-lg shadow"
        >
          <span
            className={cn(
              "p-4 bg-primary/10 rounded-full w-fit",
              idx % 2 === 0 ? "bg-primary/10" : "bg-secondary/10"
            )}
          >
            {item.icon}
          </span>
          <h2 className="text-lg font-bold text-headerFg">{item.title}</h2>
          <p className="text-bodyFg max-lg:text-sm">{item.description}</p>
          <a
            href={item.href}
            className="text-primary font-semibold border-b border-transparent hover:border-primary inline-flex items-center gap-x-3 w-fit"
          >
            {item.linkLabel} <ArrowTopRightIcon className="h-5 w-5" />
          </a>
        </SlideUpTransition>
      ))}
    </Wrapper>
  );
};
