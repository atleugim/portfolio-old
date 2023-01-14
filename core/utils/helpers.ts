import axios, { AxiosProgressEvent } from "axios";
import { ContactFormData } from "./types";

const isEmail = (email: string | undefined) => {
  const tester =
    /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

  if (!email) return false;

  const emailParts = email.split("@");

  if (emailParts.length !== 2) return false;

  const account = emailParts[0];
  const address = emailParts[1];

  if (account.length > 64) return false;
  else if (address.length > 255) return false;

  var domainParts = address.split(".");
  if (
    domainParts.some(function (part) {
      return part.length > 63;
    })
  )
    return false;

  if (!tester.test(email)) return false;

  return true;
};

const hasValidValue = (input: string | undefined) => {
  return input != undefined && input.trim().length > 0;
};

export const validateContactForm = (data: ContactFormData | undefined) => {
  try {
    return (
      hasValidValue(data?.name) &&
      hasValidValue(data?.email) &&
      hasValidValue(data?.message) &&
      isEmail(data?.email)
    );
  } catch (err) {
    console.error(err);
    return false;
  }
};

export const downloadFile = async (
  url: string,
  onDownloadProgress?: (progress: number) => void
) => {
  const res = await axios({
    url,
    method: "GET",
    responseType: "blob",
    onDownloadProgress: (progressEvent: AxiosProgressEvent) => {
      setTimeout(() => {
        const total = progressEvent.total;
        const current = progressEvent.loaded;

        if (!total) {
          return;
        }

        const percentCompleted = Math.floor((current / total) * 100);
        onDownloadProgress?.(percentCompleted);
      }, 500);
    },
  });

  if (res) {
    const href = URL.createObjectURL(res.data);

    const link = document.createElement("a");
    link.href = href;

    const filename = url.substring(url.lastIndexOf("/") + 1);

    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(href);
  }
};
