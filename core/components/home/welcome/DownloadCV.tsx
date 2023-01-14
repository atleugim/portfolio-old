import Button from "@/components/shared/Button";
import { downloadFile } from "@/utils/helpers";
import { useTranslation } from "react-i18next";

const DownloadCV = () => {
  const { t } = useTranslation();

  const btnLabel = t("page.home.download_cv");

  const handleDownload = async () => {
    const cvUrl = "/assets/files/Miguel Vega - Frontend Developer | CV.pdf";
    await downloadFile(cvUrl);
  };

  return <Button onClick={handleDownload} text={`${btnLabel} 👇`} />;
};

export default DownloadCV;
