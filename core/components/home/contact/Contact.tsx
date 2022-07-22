import ContactForm from "./Form";

const Contact = () => {
  return (
    <section id="contact" className="flex flex-col w-full space-y-4">
      <p className="flex space-x-1 text-lg font-medium">
        <span>Send me a</span>
        <span className="text-secondary">message</span>
      </p>
      <ContactForm />
    </section>
  );
};

export default Contact;
