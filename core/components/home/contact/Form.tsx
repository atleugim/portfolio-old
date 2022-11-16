import Button from "@/components/shared/Button";
import Input from "@/components/shared/Input";
import TextArea from "@/components/shared/TextArea";
import useFetch from "@/hooks/useFetch";
import { validateContactForm } from "@/utils/helpers";
import { ContactFormData, ContactFormResponse } from "@/utils/types";
import { useRef, useState } from "react";
import toast from "react-hot-toast";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState<ContactFormData>();

  const { runFetch, isLoading } = useFetch<ContactFormResponse>(
    "/api/contact",
    "POST"
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateContactForm(form)) {
      const data = await runFetch(form);

      if (data?.success) {
        toast.success("Message sent successfully!");
        formRef.current?.reset();
      } else {
        toast.error("Something went wrong!");
      }
    } else {
      toast.error("Please check out the form!");
    }
  };

  return (
    <form ref={formRef} className="w-full" onSubmit={handleSubmit}>
      <fieldset className="flex flex-col w-full space-y-5" disabled={isLoading}>
        <Input
          id="name"
          type="text"
          required
          name="name"
          label="Your name"
          autoCapitalize="words"
          placeholder="John Doe"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <Input
          id="email"
          type="email"
          required
          name="email"
          label="Your email"
          autoCapitalize="none"
          placeholder="john@doe.com"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <TextArea
          id="message"
          required
          name="message"
          label="Your message"
          autoCapitalize="sentences"
          placeholder="What's on your mind?"
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
        <Button type="submit" text="Send message" isLoading={isLoading} />
      </fieldset>
    </form>
  );
};

export default ContactForm;
