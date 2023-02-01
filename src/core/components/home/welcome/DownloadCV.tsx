import { downloadFile } from "@/core/utils/helpers";
import { useReducer } from "react";
import { useTranslation } from "react-i18next";
import Button from "../../shared/Button";

interface DownloadState {
  downloading: boolean;
  progress: number;
}

interface DownloadReducer {
  (prev: DownloadState, next: Partial<DownloadState>): DownloadState;
}

const DownloadCV = () => {
  const { t } = useTranslation();
  const btnLabel = t("page.home.download_cv");

  const [state, updateState] = useReducer<DownloadReducer>(
    (prev: DownloadState, next: Partial<DownloadState>) => {
      return { ...prev, ...next };
    },
    {
      downloading: false,
      progress: 0,
    }
  );

  const handleDownload = async () => {
    updateState({ downloading: true });

    await downloadFile(
      "/assets/files/Miguel Vega - Frontend Developer.pdf",
      (progress: number) => updateState({ progress })
    );

    updateState({ downloading: false });
  };

  return (
    <Button
      onClick={handleDownload}
      text={
        state.downloading
          ? `${btnLabel} (${state.progress}%)`
          : `${btnLabel} 📃`
      }
    />
  );
};

export default DownloadCV;
