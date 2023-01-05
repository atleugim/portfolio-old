import { useTranslation } from "react-i18next";
import ContactForm from "./Form";

const Contact = () => {
  const { t } = useTranslation();

  const title = t("page.contact.title");

  return (
    <section id="contact" className="flex flex-col w-full space-y-4">
      <p
        className="flex space-x-1 text-lg font-medium"
        dangerouslySetInnerHTML={{
          __html: title,
        }}
      />
      <ContactForm />
    </section>
  );
};

export default Contact;
