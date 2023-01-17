import Button from "@/components/shared/Button";
import Input from "@/components/shared/Inputs/Input";
import TextArea from "@/components/shared/Inputs/TextArea";
import useFetch from "@/hooks/useFetch";
import { emailPattern } from "@/utils/helpers";
import { ContactFormData, ContactFormResponse } from "@/utils/types";
import { useSyncLanguage } from "ni18n";
import { useEffect, useId } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { i18n } = useSyncLanguage();
  const toastId = useId();

  const { t } = useTranslation();
  const nameLabel = t("page.contact.form.name");
  const emailLabel = t("page.contact.form.email");
  const messageLabel = t("page.contact.form.message");
  const buttonLabel = t("page.contact.form.button");
  const requiredLabel = t("page.contact.form.required");
  const invalidEmailLabel = t("page.contact.form.invalid_email");
  const successLabel = t("page.contact.form.success");
  const errorLabel = t("page.contact.form.error");

  const {
    reset,
    register,
    setError,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: null,
      email: null,
      message: null,
    } satisfies ContactFormData,
  });

  const { runFetch, isLoading } = useFetch<ContactFormResponse>(
    "/api/contact",
    "POST"
  );

  const onSubmit = async (data: ContactFormData) => {
    try {
      const res = await runFetch(data);

      if (!res?.success) {
        throw new Error(res?.message);
      }

      toast.success(successLabel, {
        id: toastId,
      });

      reset();
    } catch (err) {
      console.error(err);
      return toast.error(errorLabel, {
        id: toastId,
      });
    }
  };

  useEffect(() => {
    if (i18n.language) {
      clearErrors();
    }
  }, [clearErrors, i18n.language]);

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <fieldset className="flex flex-col w-full space-y-5" disabled={isLoading}>
        <Input
          id="name"
          type="text"
          autoCapitalize="words"
          placeholder={nameLabel}
          error={errors.name}
          {...register("name", {
            required: requiredLabel,
          })}
        />
        <Input
          id="email"
          type="email"
          autoCapitalize="none"
          placeholder={emailLabel}
          error={errors.email}
          {...register("email", {
            required: requiredLabel,
            pattern: {
              value: emailPattern,
              message: invalidEmailLabel,
            },
          })}
        />
        <TextArea
          id="message"
          autoCapitalize="sentences"
          placeholder={messageLabel}
          error={errors.message}
          {...register("message", {
            required: requiredLabel,
          })}
        />
        <Button type="submit" text={buttonLabel} isLoading={isLoading} />
      </fieldset>
    </form>
  );
};

export default ContactForm;
