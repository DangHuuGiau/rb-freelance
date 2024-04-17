import { ContactOptions } from "@/components/contact-us/contact-options";
import ContactHeader from "@/components/contact-us/header";

export default function ContactPage() {
  return (
    <div className="py-14 md:py-16">
      <ContactHeader />
      <ContactOptions />
    </div>
  );
}
