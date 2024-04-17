import { ContactForm } from "@/components/contact/contact-form";
import { ContactOptions } from "@/components/contact/contact-options";
import ContactHeader from "@/components/contact/header";

export default function ContactPage() {
  return (
    <div className="py-14 md:py-16">
      <ContactHeader />
      <ContactOptions />
      <ContactForm />
    </div>
  );
}
