import { ContactForm } from "@/components/contact/contact-form";
import ContactHeader from "@/components/contact/header";
import { getTranslations } from "next-intl/server";

export default async function ContactPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "contact" });
  return (
    <div className="py-14 md:py-16">
      <ContactHeader t={t} />
      <ContactForm />
    </div>
  );
}
