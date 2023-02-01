import axios, { AxiosProgressEvent } from "axios";

export const emailPattern =
  /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

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

export const joinArray = (array: Array<any>, locale = "en") => {
  const formatter = new Intl.ListFormat(locale, {
    style: "long",
    type: "conjunction",
  });
  return formatter.format(array);
};
