import Button from "@/components/shared/Button";
import Input from "@/components/shared/Input";
import TextArea from "@/components/shared/TextArea";
import { hasValidValue, isEmail } from "@/utils/helpers";
import { ContactFormData } from "@/utils/types";
import { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState<ContactFormData>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      hasValidValue(form?.name) &&
      hasValidValue(form?.email) &&
      hasValidValue(form?.message)
    ) {
      if (isEmail(form?.email)) {
        console.log(`Form submitted ${form?.email}`);
      } else {
        console.log("Invalid email");
      }
    }
  };

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <fieldset className="flex flex-col w-full space-y-5">
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
        <Button type="submit" text="Send message" />
      </fieldset>
    </form>
  );
};

export default ContactForm;
