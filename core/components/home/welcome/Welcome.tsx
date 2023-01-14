import {
  DART_URL,
  FLUTTER_URL,
  JAVASCRIPT_URL,
  NEXT_JS_URL,
  REACT_URL,
  TAILWIND_URL,
} from "@/utils/vars";
import { useTranslation } from "react-i18next";
import ExternalLink from "../../shared/ExternalLink";
import ImageWithFallback from "../../shared/ImageWithFallback";
import DownloadCV from "./DownloadCV";

const Welcome = () => {
  const { t } = useTranslation();

  const title = t("page.home.title");
  const description1 = t("page.home.description.1");
  const description2 = t("page.home.description.2");
  const description3 = t("page.home.description.3");
  const andConnector = t("page.home.and");
  const withConnector = t("page.home.with");

  return (
    <section className="flex flex-col w-full space-y-10 md:flex-row md:space-x-5 md:space-y-0">
      <div className="flex flex-col items-start justify-start w-full col-span-3 space-y-4 font-light md:w-8/12">
        <div className="flex flex-col items-start">
          <p
            className="flex space-x-1 text-lg font-medium"
            dangerouslySetInnerHTML={{
              __html: title,
            }}
          />
          <h1 className="text-6xl font-bold">Miguel Vega.</h1>
        </div>
        <p>{description1}</p>
        <p>
          {description2} <b className="font-medium">web</b> {description3}{" "}
          <ExternalLink href={JAVASCRIPT_URL} name="Javascript" />,{" "}
          <ExternalLink href={REACT_URL} name="React.js" />,{" "}
          <ExternalLink href={NEXT_JS_URL} name="Next.js" />,{" "}
          <ExternalLink href={TAILWIND_URL} name="TailwindCSS" />;{" "}
          {andConnector} <b className="font-medium">mobile</b> {withConnector}{" "}
          <ExternalLink href={FLUTTER_URL} name="Flutter" /> {andConnector}{" "}
          <ExternalLink href={DART_URL} name="Dart" />.
        </p>
        <DownloadCV />
      </div>
      <div className="flex items-center justify-center w-full h-full col-span-2 max-h-80 md:w-4/12">
        <ImageWithFallback
          width={300}
          height={300}
          priority
          src="/assets/images/me.webp"
          alt="Miguel Vega"
          className="animate-fadeIn"
        />
      </div>
    </section>
  );
};

export default Welcome;
