import { ContactOptions } from "@/components/contact-us/contact-options";
import ContactHeader from "@/components/contact-us/header";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <ContactHeader />
      <ContactOptions />
    </div>
  );
}
